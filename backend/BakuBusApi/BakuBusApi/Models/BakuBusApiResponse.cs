using Newtonsoft.Json;

namespace BakuBusApi.Models
{
    public class BakuBusApiResponse
    {
        [JsonProperty("BUS")]
        public Bus[] Buses { get; set; }
    }

}
