using System.Globalization;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using BakuBusApi.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace BakuBusApi.Controllers
{
    public class ApiController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public ApiController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        public IActionResult Ping()
        {
            return Json("I Am Alive!");
        }

        public async Task<IActionResult> BusInfo()
        {
            var httpClient = _httpClientFactory.CreateClient();
            var response = await httpClient.GetAsync("https://www.bakubus.az/az/ajax/apiNew1");
            var json = await response.Content.ReadAsStringAsync();

            var data = JsonConvert.DeserializeObject<BakuBusApiResponse>(json, new JsonSerializerSettings
            {
                Culture = new CultureInfo("tr-TR")
            });

            var busInfoList = data.Buses.Select(x => x.Attributes);
            return Json(busInfoList);
        }

        public async Task<IActionResult> BusNumbers()
        {
            var httpClient = _httpClientFactory.CreateClient();
            var response = await httpClient.GetAsync("https://www.bakubus.az/az/ajax/apiNew1");
            var json = await response.Content.ReadAsStringAsync();
            var data = JsonConvert.DeserializeObject<BakuBusApiResponse>(json);
            var busNumbers = data.Buses
                .Select(x => x.Attributes.RouteCode)
                .Distinct().OrderBy(x=>x);

            return Json(busNumbers);
        }

    }
}
