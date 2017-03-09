package com.matthew.config;



import com.matthew.model.Song;
import com.matthew.repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

import javax.annotation.PostConstruct;
import java.util.Date;

@Configuration
public class RestConfig extends RepositoryRestMvcConfiguration {

    @Autowired
    SongRepository songRepository;

    @PostConstruct
    public void init() {
        Song songA = new Song("Asong");
        Song songB = new Song("Bsong");
        Song songC = new Song("Csong");
        Song songD = new Song("Dsong");

        songRepository.save(songA);
        songRepository.save(songB);
        songRepository.save(songC);
        songRepository.save(songD);
    }
}