﻿using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Laboratorio_5.Models
{
    public class PaisModel
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Debe proporcionar un nombre")]
        [DisplayName("Nombre del pais:")]
        public string Nombre { get; set; }
        [Required(ErrorMessage = "Debe seleccionar un continente")]
        [DisplayName("Continente:")]
        public string Continente { get; set; }
        [Required(ErrorMessage = "Debe ingresar el idioma")]
        [DisplayName("Idiomma:")]
        [RegularExpression("^[a-zA-Z]+$", ErrorMessage= "No puede ingresar numeros")]
        public string Idioma { get; set; }
    }
}
