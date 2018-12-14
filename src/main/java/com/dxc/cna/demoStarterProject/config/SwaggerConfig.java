package com.dxc.cna.demoStarterProject.config;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * @author snayak44
 *
 */
@Configuration
@EnableSwagger2
public class SwaggerConfig {
		  
		  public static final ApiInfo DEFAULT_API_INFO = new ApiInfo(demoStarterProject, "This is a Starter Project", "1.0", "", "Srimanta.kum.nayak@dxc.com", "Apache 2.0", "http://www.apache.org/licenses/LICENSE-2.0");

		  private static final Set<String> DEFAULT_PRODUCES_AND_CONSUMES = 
		      new HashSet<String>(Arrays.asList("application/json"));
	
	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2).select()
				.apis(RequestHandlerSelectors.basePackage("com.dxc.cna." + demoStarterProject + ".controller"))
				.paths(PathSelectors.any()).build().apiInfo(DEFAULT_API_INFO)
		        .produces(DEFAULT_PRODUCES_AND_CONSUMES)
		        .consumes(DEFAULT_PRODUCES_AND_CONSUMES)
		        .useDefaultResponseMessages(false);
	}
}
