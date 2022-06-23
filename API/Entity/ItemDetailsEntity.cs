using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc;

namespace API.Entity
{
    public class ItemDetailsEntity
    {
        // [ForeignKey("itemId")]
        public int itemId { get; set; }
        // public ItemsEntity Items { get; set; }

         public string itemName { get; set; }

         

        public int groupId { get; set; }


         public string groupName { get; set; }




        [Remote("IsExist", "Product", ErrorMessage = "serialno exist!")]
        [Key]
        public string serialNo { get; set; }
         public string ModelNo { get; set; }
        public float Price { get; set; }


         public DateTime dateOfPurchase  { get; set; }

        public int warranty { get; set; }

        public string remark { get; set; }

    }
}