using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Laboratorio3.Models
{
    public class SongModel
    {
        public string Name { get; set; }
        public string Band { get; set; }
        public string Album { get; set; }
        public string Genre { get; set; }
        public DateTime ReleasedDate { get; set; }
    }
}
