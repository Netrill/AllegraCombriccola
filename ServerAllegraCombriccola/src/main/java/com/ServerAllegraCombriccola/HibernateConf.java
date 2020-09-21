package com.ServerAllegraCombriccola;

import java.util.Properties;

import javax.sql.DataSource;

import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.ServerAllegraCombriccola.Dao.EventDao;
import com.ServerAllegraCombriccola.Model.Evento;
import com.ServerAllegraCombriccola.Service.EventServiceImpl;
import com.ServerAllegraCombriccola.Service.GeoService;
import com.ServerAllegraCombriccola.Service.GeoServiceImpl;

@Configuration
@EnableTransactionManagement
public class HibernateConf {
	
	@Bean
    public LocalSessionFactoryBean sessionFactory() {
        LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
        sessionFactory.setDataSource(dataSource());
        sessionFactory.setHibernateProperties(hibernateProperties());
        //sessionFactory.setPackagesToScan({"com.baeldung.hibernate.bootstrap.model" });
        sessionFactory.setAnnotatedClasses(new Class[] { Evento.class });

        return sessionFactory;
    }
	
	@Bean
    public DataSource dataSource() {
        BasicDataSource dataSource = new BasicDataSource();
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/allegracombriccoladb?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC");
        dataSource.setUsername("root");
        dataSource.setPassword("scachri86");
 
        return dataSource;
    }
	
	@Bean
    public GeoService geoService() {
        return new GeoServiceImpl();
    }
	
	@Bean
    public EventDao eventDao() {
        return new EventDao();
    }
	
	@Bean
    public EventServiceImpl eventServiceImp() {
        return new EventServiceImpl();
    }
	
	private final Properties hibernateProperties() {
        Properties hibernateProperties = new Properties();
        hibernateProperties.setProperty(
          "hibernate.hbm2ddl.auto", "update");
        hibernateProperties.setProperty(
          "hibernate.dialect", "org.hibernate.dialect.MySQL5Dialect");
        return hibernateProperties;
    }
}
	