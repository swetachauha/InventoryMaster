using System.ComponentModel.DataAnnotations;

namespace API.Entity
{
    public class registerEntity
    {
      
        public int Id { get; set; }

        [Key]
        public string UserName { get; set; }
        public byte[]  PasswordHash { get; set; }
        public byte[]  PasswordSalt { get; set; }
        public DateTime RgisteredAt_ { get; set; }=DateTime.Now;

    }
}