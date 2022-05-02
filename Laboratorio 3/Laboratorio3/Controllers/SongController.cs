using Laboratorio3.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Laboratorio3.Controllers
{
    public class SongController : Controller
    {
        public IActionResult Index()
        {
            //var song = GetSong();
            ViewBag.MainTitle = "My favorite song";
            ViewBag.Name = "Sovereign Light Café";
            ViewBag.Band = "Keane";
            ViewBag.Album = "Strangeland";
            ViewBag.Genre = "Alternative rock/Pop rock";
            ViewBag.ReleasedDate = new DateTime(2012, 07, 23);
            //return View(song);
            return View();
        }

        /**
        private List<SongModel> GetSong()
        {
            List<SongModel> song = new List<SongModel>();
            song.Add( new SongModel
            {
                Name = "Sovereign Light Café",
                Band = "Keane",
                Album = "Strangeland",
                Genre = "Alternative rock/Pop rock",
                ReleasedDate = new DateTime(2012, 07, 23)
            });
            
            return song;
        }
        */
    }
}
