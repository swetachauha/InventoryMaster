using API.Entity;
using API.Interfaces;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
// using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
namespace API.Services
{
    public class TokenServices : ITokenService
    {
        private readonly SymmetricSecurityKey _key;
        public TokenServices(IConfiguration config)
        {
            _key= new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"]));
        }


        public string CreateToken(registerEntity user)
        {
            var claims=new List<Claim>
            {
              new Claim(JwtRegisteredClaimNames.NameId , user.UserName)

            };
            var creds=new SigningCredentials(_key,SecurityAlgorithms.HmacSha512Signature);

            var tokenDescription=new SecurityTokenDescriptor
            {
                Subject=new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials=creds
            };
            var tokenHandler= new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescription);

            return tokenHandler.WriteToken(token);
        }    
    }    
}