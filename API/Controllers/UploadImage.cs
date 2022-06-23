// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using API.Data;
// using System;  
// using System.Collections.Generic;  
// using System.IO;  
// using System.Linq;  
// using System.Net;  
// using System.Net.Http;  
// using System.Net.Http.Headers;  
// using System.Web;  
// using System.Web.Http;  
// // using FileUploadAPI.Models;  
// namespace API.Controllers
// {
//     public class UploadImage:BaseApiController
//     {
//         private readonly DataContext _context;
//         public UploadImage(DataContext context)
//         {
//             _context = context;
//         }

//         [HttpPost]
//         public System.Web.Http.IHttpActionResult AddFile() {  
//                 string result = "";  
//                 try {  
//                     AngularDBEntities objEntity = new AngularDBEntities();  
//                     FileDetail objFile = new FileDetail();  
//                     string fileName = null;  
//                     string imageName = null;  
//                     var httpRequest = HttpContext.Current.Request;  
//                     var postedImage = httpRequest.Files["ImageUpload"];  
//                     objFile.UserName = httpRequest.Form["UserName"];  
//                     if (postedImage != null) {  
//                         imageName = new String(Path.GetFileNameWithoutExtension(postedImage.FileName).Take(10).ToArray()).Replace(" ", "-");  
//                         imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedImage.FileName);  
//                         var filePath = HttpContext.Current.Server.MapPath("~/Files/" + imageName);  
//                         postedImage.SaveAs(filePath);  
//                     }  
//                     if (postedFile != null) {  
//                         fileName = new String(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(" ", "-");  
//                         fileName = fileName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);  
//                         var filePath = HttpContext.Current.Server.MapPath("~/Files/" + fileName);  
//                         postedFile.SaveAs(filePath);  
//                     }  
//                     objFile.Image = imageName;  
//                     objFile.DocFile = fileName;  
//                     objEntity.FileDetails.Add(objFile);  
//                     int i = objEntity.SaveChanges();  
//                     if (i > 0) {  
//                         result = "File uploaded sucessfully";  
//                     } else {  
//                         result = "File uploaded faild";  
//                     }  
//                 } catch (Exception) {  
//                     throw;  
//                 }  
//                 return Ok(result);  
//             }  
//     }
// }