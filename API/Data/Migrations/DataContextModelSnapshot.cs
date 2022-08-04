﻿// <auto-generated />
using System;
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("API.Entity.BankEntity", b =>
                {
                    b.Property<string>("IFSC_Code")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BankName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IFSC_Code");

                    b.ToTable("Bank");
                });

            modelBuilder.Entity("API.Entity.BranchEntity", b =>
                {
                    b.Property<string>("BranchId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BranchName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirmName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("BranchId");

                    b.ToTable("Branch");
                });

            modelBuilder.Entity("API.Entity.firmEntity", b =>
                {
                    b.Property<int>("ID")
                        .HasColumnType("int");

                    b.Property<string>("Account_No")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Bank_Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Bank_Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Contact_Mobile")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Contact_Person")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FSSAI_No")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirmAddress")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirmLocation")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirmLogo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirmName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("GST_No")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IFSC_Code")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PAN_No")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Reg_no")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Website")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Firm");
                });

            modelBuilder.Entity("API.Entity.godownEntity", b =>
                {
                    b.Property<int>("godownId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("godownId"), 1L, 1);

                    b.Property<DateTime>("CreatedAt_")
                        .HasColumnType("datetime2");

                    b.Property<string>("godownAddress")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("godownName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("managerName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("godownId");

                    b.ToTable("Godown");
                });

            modelBuilder.Entity("API.Entity.groupEntity", b =>
                {
                    b.Property<int>("groupId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("groupId"), 1L, 1);

                    b.Property<DateTime>("CreatedAt_")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("UpdatedAt_")
                        .HasColumnType("datetime2");

                    b.Property<bool>("active")
                        .HasColumnType("bit");

                    b.Property<string>("groupCategory")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("groupName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("groupId");

                    b.ToTable("Groups");
                });

            modelBuilder.Entity("API.Entity.ItemDetailsEntity", b =>
                {
                    b.Property<string>("serialNo")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ModelNo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<float>("Price")
                        .HasColumnType("real");

                    b.Property<DateTime>("dateOfPurchase")
                        .HasColumnType("datetime2");

                    b.Property<int>("groupId")
                        .HasColumnType("int");

                    b.Property<string>("groupName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("itemId")
                        .HasColumnType("int");

                    b.Property<string>("itemName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("remark")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("warranty")
                        .HasColumnType("int");

                    b.HasKey("serialNo");

                    b.ToTable("ItemDetails");
                });

            modelBuilder.Entity("API.Entity.ItemsEntity", b =>
                {
                    b.Property<int>("itemId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("itemId"), 1L, 1);

                    b.Property<string>("Bar_Code")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("CGST")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("Cess")
                        .HasColumnType("decimal(18,2)");

                    b.Property<DateTime>("CreatedAt_")
                        .HasColumnType("datetime2");

                    b.Property<string>("HSN_No")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("IGST")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("Purchase_Rate")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("SGST")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("Sales_Rate")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("Unit")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("groupName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("itemName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("margin")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("itemId");

                    b.ToTable("Items");
                });

            modelBuilder.Entity("API.Entity.PartyEntity", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Contact_Person")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("GST_No")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PAN_No")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PIN_No")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Party_Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Party_Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Party_Type")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone_No")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("State")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Party");
                });

            modelBuilder.Entity("API.Entity.purchaseEntity", b =>
                {
                    b.Property<int>("purchaseId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("purchaseId"), 1L, 1);

                    b.Property<DateTime>("CreatedAt_")
                        .HasColumnType("datetime2");

                    b.Property<string>("itemName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("purchaseDate")
                        .HasColumnType("datetime2");

                    b.Property<decimal>("quantity")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("unit")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("purchaseId");

                    b.ToTable("Purchase");
                });

            modelBuilder.Entity("API.Entity.PurchaseMasterEntity", b =>
                {
                    b.Property<int>("purchaseID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("purchaseID"), 1L, 1);

                    b.Property<string>("Builty_No")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Purchase_Invoice_Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Purchase_Invoice_NO")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Purchase_Order_Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Purchase_Order_No")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Vendor_Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("purchaseID");

                    b.ToTable("PurchaseMaster");
                });

            modelBuilder.Entity("API.Entity.purchaseReportEntity", b =>
                {
                    b.Property<int>("purchaseReportId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("purchaseReportId"), 1L, 1);

                    b.Property<DateTime>("CreatedAt_")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("fromDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("itemName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("quantity")
                        .HasColumnType("decimal(18,2)");

                    b.Property<DateTime>("toDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("unit")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("purchaseReportId");

                    b.ToTable("PurchaseReport");
                });

            modelBuilder.Entity("API.Entity.purchasestockEntity", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<DateTime>("CreatedAt_")
                        .HasColumnType("datetime2");

                    b.Property<string>("itemName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("totalPurchase")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("totalStockQuantity")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("id");

                    b.ToTable("PurchaseStock");
                });

            modelBuilder.Entity("API.Entity.purchaseTotalEntity", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<int>("itemId")
                        .HasColumnType("int");

                    b.Property<string>("itemName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("total")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("ID");

                    b.ToTable("PurchaseTotal");
                });

            modelBuilder.Entity("API.Entity.PurchaseTransactionEntity", b =>
                {
                    b.Property<int>("purchaseTransactionID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("purchaseTransactionID"), 1L, 1);

                    b.Property<string>("CGST")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HSN_No")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IGST")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ItemName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("Quantity")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("SGST")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Total_Amount")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("Unit")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("purchaseID")
                        .HasColumnType("int");

                    b.HasKey("purchaseTransactionID");

                    b.ToTable("PurchaseTransaction");
                });

            modelBuilder.Entity("API.Entity.registerEntity", b =>
                {
                    b.Property<string>("UserName")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("Id")
                        .HasColumnType("int");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("varbinary(max)");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("varbinary(max)");

                    b.Property<DateTime>("RgisteredAt_")
                        .HasColumnType("datetime2");

                    b.HasKey("UserName");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("API.Entity.saleEntity", b =>
                {
                    b.Property<int>("saleId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("saleId"), 1L, 1);

                    b.Property<DateTime>("CreatedAt_")
                        .HasColumnType("datetime2");

                    b.Property<string>("godownName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("groupName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("itemName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("quantity")
                        .HasColumnType("decimal(18,2)");

                    b.Property<DateTime>("saleDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("unit")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("saleId");

                    b.ToTable("Sale");
                });

            modelBuilder.Entity("API.Entity.SalesEntity", b =>
                {
                    b.Property<int>("Sales_Invoice_No")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnOrder(1);

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Sales_Invoice_No"), 1L, 1);

                    b.Property<DateTime>("Builty_Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Builty_No")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Customer_Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Document_Through")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Purchase_Order_Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Purchase_Order_no")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Sales_Date")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("Sales_Invoice_Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Transport")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Sales_Invoice_No");

                    b.ToTable("Sales");
                });

            modelBuilder.Entity("API.Entity.salesReportEntity", b =>
                {
                    b.Property<int>("saleReportId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("saleReportId"), 1L, 1);

                    b.Property<DateTime>("fromDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("godownName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("itemName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("quantity")
                        .HasColumnType("decimal(18,2)");

                    b.Property<DateTime>("toDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("unit")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("saleReportId");

                    b.ToTable("SalesReport");
                });

            modelBuilder.Entity("API.Entity.SalesTransactionEntity", b =>
                {
                    b.Property<int>("salesTransactionID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("salesTransactionID"), 1L, 1);

                    b.Property<string>("CGST")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("HSN_No")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IGST")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ItemName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("Quantity")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("SGST")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Sales_Invoice_No")
                        .HasColumnType("int");

                    b.Property<decimal>("Total_Amount")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("Unit")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("salesTransactionID");

                    b.ToTable("SalesTransaction");
                });

            modelBuilder.Entity("API.Entity.TaxEntity", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<decimal>("TaxPerc")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("TaxType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("_CreatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.ToTable("Tax");
                });

            modelBuilder.Entity("API.Entity.TransportEntity", b =>
                {
                    b.Property<int>("Transporter_ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Transporter_ID"), 1L, 1);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Contact_Person")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Created_At")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("GST_No")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone_No")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("State")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Transporter_Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Transporter_ID");

                    b.ToTable("Transport");
                });

            modelBuilder.Entity("API.Entity.UnitEntity", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"), 1L, 1);

                    b.Property<string>("Acronymn")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Unit")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("_CreatedAt")
                        .HasColumnType("datetime2");

                    b.HasKey("ID");

                    b.ToTable("Unit");
                });
#pragma warning restore 612, 618
        }
    }
}
