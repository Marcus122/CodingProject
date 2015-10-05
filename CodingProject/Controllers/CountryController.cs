using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CodingProject.Models;

namespace CodingProject.Controllers
{
    public class CountryController : ApiController
    {
        public IEnumerable<Country> GetCountries()
        {
            CountryDatabase countryDatabase = new CountryDatabase();
            return countryDatabase.Countries;
        }
        public IHttpActionResult GetCountries(string code)
        {
            CountryDatabase countryDatabase = new CountryDatabase();
            Country country = countryDatabase.Countries.FirstOrDefault((c) => c.ISO == code);
            if (country == null)
            {
                return NotFound();
            }
            return Ok(country);
        }
    }
}
