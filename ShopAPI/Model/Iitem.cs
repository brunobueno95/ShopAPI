namespace ShopAPI
{
    public interface Iitem
    {
        public string name { get; set; }
        public double pricetocustomer { get; set; }

        public string id { get; set; }

        public string img { get; set; }

        public string typeofbtn { get; set; }

        public string type { get; set; }

        public string Start();
    }
}
