namespace ShopAPI.Model
{
    public class VideoItem : Iitem
    {
        public string name { get; set; }
        public double pricetocustomer { get; set; }
        public string id { get; set; }
        public string img { get; set; }
        public string typeofbtn { get; set; }
        public string type { get; set; }
        

        public string Start()
        {
            return "WATCHING VIDEO";
        }
        public VideoItem(string Name, double Pricetocustomer, string image)
        {
            name = Name;
            pricetocustomer = Pricetocustomer;
            typeofbtn = "Watch";
            type = "Video";
            img = image;

            randomid();

        }
        public void randomid()
        {
            var random = new Random();
            id = Convert.ToString(random.Next(1, 100));
        }

    }
        
    }

