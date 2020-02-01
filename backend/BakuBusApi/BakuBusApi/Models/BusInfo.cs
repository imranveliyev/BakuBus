using Newtonsoft.Json;

namespace BakuBusApi.Models
{
    public class BusInfo
    {
        [JsonProperty("BUS_ID")]
        public string BusId { get; set; }

        [JsonProperty("PLATE")]
        public string Plate { get; set; }

        [JsonProperty("LATITUDE")]
        public double Latitude { get; set; }

        [JsonProperty("LONGITUDE")]
        public double Longitude { get; set; }

        [JsonProperty("DISPLAY_ROUTE_CODE")]
        public string RouteCode { get; set; }


        //public string DRIVER_NAME { get; set; }
        //public string CURRENT_STOP { get; set; }
        //public string PREV_STOP { get; set; }
        //public string SPEED { get; set; }
        //public string BUS_MODEL { get; set; }
        //public string BUS_MODEL { get; set; }
        //public string ROUTE_NAME { get; set; }
        //public string LAST_UPDATE_TIME { get; set; }
        //public string SVCOUNT { get; set; }
    }
}
