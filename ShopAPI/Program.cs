using Microsoft.AspNetCore.StaticFiles.Infrastructure;
using ShopAPI;
using ShopAPI.Model;
using System.Runtime.CompilerServices;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var shop = new Shop(new Admin("bruno","123","123"));
Customer c = new Customer("Bruno", "432", "432");
c.account.Add(new Account("MasterCard", "1239090", "928", "mastercard.png", true, "Bruno Bueno"));
c.account.Add(new Account("Visa", "1239090", "928", "Visa.png", true, "Bruno Bueno"));
shop.allcustomers.Add(c);
shop.allitems.Add(new AdminItem(new AudioBookItem("Harry Potter", 250, "hp.jpg"), 0.25));
shop.allitems.Add(new AdminItem(new EbookItem("Think like a programmer", 200, "tlp.jpg"), 0.10));
shop.allitems.Add(new AdminItem(new VideoItem("Shark Documentary", 100, "sharkDoc.webp"), 0.3));


var app = builder.Build();
app.MapGet("/Shop", () =>
{
    return shop;

});





app.UseHttpsRedirection();


app.UseStaticFiles();
app.Run();

