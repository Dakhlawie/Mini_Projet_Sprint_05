package com.meriem.demo.services;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.meriem.demo.dto.OuvrierDTO;
import com.meriem.demo.entities.Ouvrier;
import com.meriem.demo.repos.OuvrierRepository;

@Service
public class OuvrierServiceImpl implements OuvrierService{
@Autowired
OuvrierRepository ouvrierRepository;
@Autowired
ModelMapper modelMapper;

	@Override
	public OuvrierDTO saveOuvrier(OuvrierDTO p) {
		
		return convertEntityToDto(ouvrierRepository.save(convertDtoToEntity(p)));
	}

	@Override
	public OuvrierDTO updateOuvrier(OuvrierDTO p) {
		
		return convertEntityToDto(ouvrierRepository.save(convertDtoToEntity(p)));
	}

	@Override
	public void deleteOuvrier(Ouvrier p) {
		ouvrierRepository.delete(p);
		
	}

	@Override
	public void deleteOuvrierById(Long id) {
		ouvrierRepository.deleteById(id);
		
	}

	@Override
	public OuvrierDTO getOuvrier(Long id) {
		
		return convertEntityToDto(ouvrierRepository.findById(id).get());
	}

	@Override
	public List<OuvrierDTO> getAllOuvriers() {
	
		return ouvrierRepository.findAll().stream()
				.map(this::convertEntityToDto)
				.collect(Collectors.toList());
	}

	@Override
	public List<Ouvrier> findByChantierIdChantier(Long id) {
		
		return ouvrierRepository.findByChantierIdChantier(id);
	}
	
	@Override
	public OuvrierDTO convertEntityToDto(Ouvrier ouvrier) {
		OuvrierDTO ouvrierDTO = modelMapper.map(ouvrier, OuvrierDTO.class);
		 return ouvrierDTO; 
	 /*OuvrierDTO ouvrierDTO = new OuvrierDTO();
	 ouvrierDTO.setIdProduit(produit.getIdProduit());
	 ouvrierDTO.setNomProduit(produit.getNomProduit());
	 ouvrierDTO.setPrixProduit(produit.getPrixProduit());
	 ouvrierDTO.setDateCreation(p.getDateCreation());
	 ouvrierDTO.setCategorie(produit.getCategorie()); 
	 return produitDTO; */
	 
	/* return OuvrierDTO.builder()
	.idOuvrier(ouvrier.getIdOuvrier())
	.nom(ouvrier.getNom())
	.salaire(ouvrier.getSalaire())
	.tel(ouvrier.getTel())
	.dateEmbauche(ouvrier.getDateEmbauche())
	.chantier(ouvrier.getChantier())
	.build();*/
	}
	@Override
	public Ouvrier convertDtoToEntity(OuvrierDTO ouvrierDto) {
		Ouvrier ouvrier = new Ouvrier();
		ouvrier = modelMapper.map(ouvrierDto, Ouvrier.class);

	/*Ouvrier ouvrier = new Ouvrier();
	ouvrier.setIdOuvrier(ouvrierDto.getIdOuvrier());
	ouvrier.setNom(ouvrierDto.getNom());
	ouvrier.setTel(ouvrierDto.getTel());
	ouvrier.setSalaire(ouvrierDto.getSalaire());
	ouvrier.setDateEmbauche(ouvrierDto.getDateEmbauche());
	ouvrier.setChantier(ouvrierDto.getChantier()); */
	 return ouvrier; 
	}

	@Override
	public Ouvrier getOuvrierById(Long id) {
		
		return ouvrierRepository.findById(id).get();
	}

	@Override
	public List<Ouvrier> findByNomContains(String nom) {
		
		return ouvrierRepository.findByNomContains(nom);
	}

	

}
