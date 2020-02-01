using Newtonsoft.Json;

namespace BakuBusApi.Models
{
    public class Bus
    {
        [JsonProperty("@attributes")]
        public BusInfo Attributes { get; set; }
    }
}