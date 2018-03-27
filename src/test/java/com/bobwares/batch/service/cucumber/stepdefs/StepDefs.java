package com.bobwares.batch.service.cucumber.stepdefs;

import com.bobwares.batch.service.Batchservice1000App;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = Batchservice1000App.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
