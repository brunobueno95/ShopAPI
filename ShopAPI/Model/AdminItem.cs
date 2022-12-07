namespace ShopAPI
{
    public class AdminItem
    {
        public Iitem _item { get; set; }

        public double percentagetocreator { get; set; }

        public int amountofbuys { get; set; }

        public int profitpersell { get; set; }

        public string id { get; set; } /*= _item.id;*/

        public AdminItem(Iitem item,double pc)
        {
            _item = item;
            percentagetocreator = pc;
            amountofbuys = 0;
            profitpersell = 0;
            id= _item.id;
            setProfit();
        }

        public void setProfit()
        {
            profitpersell = (int)(_item.pricetocustomer - _item.pricetocustomer * percentagetocreator);
        }

    }
}
