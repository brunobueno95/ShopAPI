using Microsoft.AspNetCore.Routing.Constraints;

namespace ShopAPI
{
    public class EbookItem : Iitem
    {
        public string name { get; set; }
        public double pricetocustomer { get; set; }
        public string id { get; set; }
        public string img { get; set; }
        public string typeofbtn { get; set; }
        public string type { get; set; }

        public EbookItem(string Name, double Pricetocustomer,string image )
        {
            name = Name;
            pricetocustomer = Pricetocustomer;
            typeofbtn = "Read";
            type= "Ebook";
            img = image;    

            randomid();

        }

        public string Start()
        {
            return "READING BOOK";
        }
         public void randomid()
        {
            var random = new Random();
            id= Convert.ToString(random.Next(1,100));
        }
    }
}
