using System.Data;
using System.Data.SqlClient;
using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext :DbContext
    {
         private readonly IConfiguration _configuration;
        private readonly string _connectionString;
        public DataContext(DbContextOptions options,IConfiguration configuration) : base(options)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("connection");


        }
      public IDbConnection CreateConnection()
        => new SqlConnection(_connectionString);
        // protected override void OnModelCreating(ModelBuilder modelBuilder)
        // {
        //     modelBuilder.Entity<ItemsEntity>()
        //             .HasOne<groupEntity>(pi => pi.Group)
        //             .WithMany(pizza => pizza.Items)
        //             .HasForeignKey(pi => pi.groupId);
        // }
 
         public DbSet<registerEntity>Users{get; set;}

        public DbSet<groupEntity>Groups{get; set;}

		public DbSet<ItemDetailsEntity>ItemDetails{get; set;}
        public DbSet<ItemsEntity>Items{get; set;}
        public DbSet<godownEntity>Godown{get; set;}
        public DbSet<purchaseEntity>Purchase{get; set;}
        public DbSet<saleEntity>Sale{get; set;}
        public DbSet<salesReportEntity>SalesReport{get; set;}
        public DbSet<purchaseReportEntity>PurchaseReport{get; set;}

        public DbSet<purchaseTotalEntity>PurchaseTotal{get; set;}
        public DbSet<purchasestockEntity>PurchaseStock{get; set;}

        public DbSet<UnitEntity>Unit{get; set;}
        public DbSet<TaxEntity>Tax{get; set;}
        public DbSet<BankEntity>Bank{get; set;}
        public DbSet<firmEntity>Firm{get; set;}

        public DbSet<TransportEntity>Transport{get; set;}

        public DbSet<BranchEntity>Branch{get; set;}
        public DbSet<PartyEntity>Party{get; set;}
        public DbSet<PurchaseMasterEntity>PurchaseMaster{get; set;}

        public DbSet<PurchaseTransactionEntity>PurchaseTransaction{get; set;}

        public DbSet<SalesEntity>Sales{get; set;}

        public DbSet<SalesTransactionEntity>SalesTransaction{get; set;}








    }
}