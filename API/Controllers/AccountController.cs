using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entity;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AccountController:BaseApiController
    {
        
         private readonly DataContext _context;
        private readonly ITokenService _tokenService;

        public DataContext Context => _context;

        public AccountController(DataContext context
        , 
        ITokenService tokenService 
        )
        {
            _tokenService = tokenService;
            _context = context;
        }

          [HttpPost("register")]
        public async Task<ActionResult<UserDTO>> Register(RegisterDTO registerDTO)
        {
            // if user alreadyexists throw err
            // if (await UserExists(registerDTO.UserName))
            // {
            //     Console.WriteLine("exists", registerDTO);
            //     return BadRequest("UserName already taken");

            // }d
           
                using var hmac = new HMACSHA512();
                Console.WriteLine("console", registerDTO);
                var user = new registerEntity
                {
                    UserName = registerDTO.UserName,
                    PasswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(registerDTO.Password)),
                    PasswordSalt = hmac.Key
                };
                _context.Users.Add(user);
                await _context.SaveChangesAsync();
                return new UserDTO
                {
                    UserName=user.UserName,
                    Token=_tokenService.CreateToken(user)
                };
            


        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDTO)
        {
            // user validated
            var user = await _context.Users.SingleOrDefaultAsync(x => x.UserName == loginDTO.userName);
            if (user == null) return Unauthorized("Invalid UserName");

            // pass validated
            //   convert dtopassword to Hashpassword to match with DB Hashed password
            using var hmac = new HMACSHA512(user.PasswordSalt);
            var passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(loginDTO.password));
            for (int i = 0; i < passwordHash.Length; i++)
            {
                if (passwordHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid pass");

            }

             return new UserDTO
                {
                    UserName=user.UserName,
                    Token=_tokenService.CreateToken(user)
                };
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<registerEntity>>> GetUser()
        {
            Console.WriteLine("SCHOOL SCHOOL SCHOOL");

            return await  _context.Users.ToListAsync();
        }
    }
    
}