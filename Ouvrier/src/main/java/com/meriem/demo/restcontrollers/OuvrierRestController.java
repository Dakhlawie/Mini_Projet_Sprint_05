package com.meriem.demo.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.meriem.demo.dto.OuvrierDTO;
import com.meriem.demo.entities.Ouvrier;
import com.meriem.demo.repos.OuvrierRepository;
import com.meriem.demo.services.OuvrierService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class OuvrierRestController {
@Autowired
OuvrierService ouvrierService;
@Autowired
OuvrierRepository ouvrierRepository;
@RequestMapping(method = RequestMethod.GET)
public List<OuvrierDTO> getAllOuvriers() {
return ouvrierService.getAllOuvriers();
}
@RequestMapping(method = RequestMethod.POST)
public OuvrierDTO createOuvrier(@RequestBody OuvrierDTO ouvrier) {
return ouvrierService.saveOuvrier(ouvrier);
}
@RequestMapping(method = RequestMethod.PUT)
public OuvrierDTO updateOuvrier(@RequestBody OuvrierDTO ouvrier) {
return ouvrierService.updateOuvrier(ouvrier);
}
@RequestMapping(value="/{id}",method = RequestMethod.DELETE)
public void deleteOuvrier(@PathVariable("id") Long id)
{
ouvrierService.deleteOuvrierById(id);
}
@RequestMapping(value="/ouvriesch/{idChantier}",method = RequestMethod.GET)
public List<Ouvrier> getOuvriersByChantierId(@PathVariable("idChantier") Long idChantier) {
return ouvrierService.findByChantierIdChantier(idChantier);
}
@RequestMapping(value="/{id}", method=RequestMethod.GET)
public Ouvrier getOuvrierById(@PathVariable("id") Long id) {
	return ouvrierService.getOuvrierById(id)	;
}
@RequestMapping(value="/ouvrsByName/{nom}",method = RequestMethod.GET)
public List<Ouvrier> findByNomContains(@PathVariable("nom") String nom) {
return ouvrierService.findByNomContains(nom);
}

}
