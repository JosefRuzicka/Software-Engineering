using Microsoft.AspNetCore.Mvc;

namespace Laboratorio_5.Models
{
    public class PaisModel
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Continente { get; set; }
        public string Idioma { get; set; }
    }
}
