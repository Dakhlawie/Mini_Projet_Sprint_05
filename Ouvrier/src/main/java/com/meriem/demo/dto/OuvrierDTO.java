package com.meriem.demo.dto;

import java.util.Date;

import com.meriem.demo.entities.Chantier;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OuvrierDTO {
	private Long idOuvrier;
	private String nom;
	private String tel;
	private Date dateEmbauche;
	private double salaire;
	private Chantier chantier;
	private String nomChantier;


}
