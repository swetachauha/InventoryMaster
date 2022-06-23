// return this object when user logs in or rigesters

namespace API.DTOs
{
    public class UserDTO
    {
        public string UserName { get; set; }
        public string Token { get; set; }
    }
}