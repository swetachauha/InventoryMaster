// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Builder;
// using Microsoft.AspNetCore.Hosting;
// using Microsoft.AspNetCore.HttpsPolicy;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.Extensions.Configuration;
// using Microsoft.Extensions.DependencyInjection;
// using Microsoft.Extensions.Hosting;
// using Microsoft.Extensions.Logging;
// using Microsoft.OpenApi.Models;
// using API.Data;
// using Microsoft.EntityFrameworkCore;
// using API.Services;
// using Microsoft.AspNetCore.Authentication.JwtBearer;
// using Microsoft.IdentityModel.Tokens;
// using System.Text;
// using API.Interface;

// namespace API
// {
//     public class Startup
//     {
//         public Startup(IConfiguration configuration)
//         {
//             Configuration = configuration;
//         }

//         public IConfiguration Configuration { get; }

//         // This method gets called by the runtime. Use this method to add services to the container.
//         public void ConfigureServices(IServiceCollection services)
//         {
//             services.AddScoped<ITokenServices, TokenServices>();
//             services.AddControllers();
//             services.AddDbContext<DataContext>(db => db.UseSqlServer(Configuration.GetConnectionString("connection")));

//             services.AddSwaggerGen(c =>
//             {
//                 c.SwaggerDoc("v1", new OpenApiInfo { Title = "WebAPIv5", Version = "v1" });
//             });

//              services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//              .AddJwtBearer(options => 
//              {
//                  options.TokenValidationParameters= new TokenValidationParameters
//                  {
//                      ValidateIssuerSigningKey = true,
//                      IssuerSigningKey=new SymmetricSecurityKey
//                      (
//                          Encoding.UTF8.GetBytes
//                          (
//                              Configuration["TokenKey"]
//                          )
//                      ),
//                      ValidateIssuer=false,
//                      ValidateAudience=false
//                  };
                 
//              }
//              );
//         }

//         // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
//         public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
//         {
//             if (env.IsDevelopment())
//             {
//                 app.UseDeveloperExceptionPage();
//                 app.UseSwagger();
//                 app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "WebAPIv5 v1"));
//             }

//             app.UseHttpsRedirection();

//             app.UseRouting();

//             app.UseAuthentication();

//             app.UseAuthorization();

//             app.UseEndpoints(endpoints =>
//             {
//                 endpoints.MapControllers();
//             });
//         }
//     }
// }

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Services;
using System.Text;
// using API.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
// using API.Helper;

namespace API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<Interfaces.ITokenService, TokenServices>();
            // // services.AddControllers().AddJsonOptions(options=>{
            // //     // options.JsonSerializerOptions.Converters.Add(new DateConverter());
            // // });
            // services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);
            services.AddDbContext<DataContext>(db => db.UseSqlServer(Configuration.GetConnectionString("connection")));
                        services.AddControllers().AddNewtonsoftJson();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "WebAPIv5", Version = "v1" });
            });
            // services.AddControllers().AddNewtonsoftJson();


            services.AddCors();
             services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
             .AddJwtBearer(options => 
             {
                 options.TokenValidationParameters= new TokenValidationParameters
                 {
                     ValidateIssuerSigningKey = true,
                     IssuerSigningKey=new SymmetricSecurityKey
                     (
                         Encoding.UTF8.GetBytes
                         (
                             Configuration["TokenKey"]
                         )
                     ),
                     ValidateIssuer=false,
                     ValidateAudience=false
                 };
                 
             }
             );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "WebAPIv5 v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(x=>x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200"));

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}

