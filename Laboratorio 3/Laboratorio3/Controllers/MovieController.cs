using Laboratorio3.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Laboratorio3.Controllers
{
    public class MovieController : Controller
    {
        public IActionResult Index()
        {
            var movies = GetListOfMovies();
            ViewBag.MainTitle = "List of my favorite films";
            return View(movies);
        }

        private List<MovieModel> GetListOfMovies()
        {
            List<MovieModel> movies = new List<MovieModel>();
            movies.Add(new MovieModel
            {
                Id = 1,
                Name = "The Lord of the Rings: The Fellowship of the Ring",
                Genre = "Epic fantasy/Adventure",
                ReleasedDate = new DateTime(2001, 12, 10)
            });
            movies.Add(new MovieModel
            {
                Id = 2,
                Name = "The Gentlemen",
                Genre = "Action/Comedy",
                ReleasedDate = new DateTime(2019, 12, 03)
            });
            movies.Add(new MovieModel
            {
                Id = 3,
                Name = "Stonehearst Asylum",
                Genre = "Gothic",
                ReleasedDate = new DateTime(2014, 10, 24)
            });

            return movies;
        }
    }
}
