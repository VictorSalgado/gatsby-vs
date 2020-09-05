import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import "../assets/icomoon/style.css";
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0 name">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.role}
          </div>
          <p className="lead mb-5">
            Passionate about software and always willing to learn new things.<br></br>
            Over the past few years I have had the opportunity to work in large companies, in small companies and currently in a medium sized company. 
            I have developed many projects and their different parts as frontend, backend, data loads. I am a versatile developer who is more comfortable in the backend.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineer</h3>
              <div className="subheading mb-3">Exceltic</div>
              <div>
                  Multiple projects with different technologies among which are the following:
                  <ul>
                    <li>
                      <i className="fa-li fa fa-check"></i>
                        Development of a desktop application with Angular and Electron.
                    </li>
                    <li>
                      <i className="fa-li fa fa-check"></i>
                        Automated end to end testing of a web application built in Angular with Protractor
                    </li>
                    <li>
                      <i className="fa-li fa fa-check"></i>
                      Complete development of a web application, from the frontend (Angular) to the backend (Django)
                      along with automated tasks with Celery. Design and implementation of a relational database (MariaDB).
                      CI automated deployment process with Jenkins over Linux environment with Nginx, Gunicorn, Supervisor.
                    </li>
                </ul>
              </div>
              <p>
                Tech Stack: Angular, Protractor, Electron, Django, Swagger, Jenkins, Nginx, Linux, Gunicorn, Azure DevOps, Git, Mercurial, Redis, MariaDB, NodeJS
              </p>
              <p>
                Methodologies applied: Agile Team, Scrum, ISO 15504
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Fullstack Developer</h3>
              <div className="subheading mb-3">Valora Digital</div>
              <p>
                Development of a SaaS product that allowed fans of a football match to evaluate players, coaches and referees.
                Development of different web elements such as website, backoffice or widgets embedded in other websites.
                API development. Handling of SQL and NoSQL databases. Load testing to evaluate the API
                performance.
              </p>
              <p>
                Tech Stack: Amazon Web Services (EC2, S3, RDS), Java Spring Boot, Swagger, Angular, MySQL, Couchbase 5.x, Trello, Git, Sourcetree
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2017 - December 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Developer</h3>
              <div className="subheading mb-3">Deloitte</div>
              <p>
                CRM consulting with Salesforce platform. Experience through internacional project (Argentina, Brazil, Perú, Chile). ETL development
                for automatized daa load to Salesforce environment. Custom development in Salesforce such as Visualforce, Apex Classes, Lightning Components, Apex Tests.
              </p>
              <p>
                Tech Stack: Talend, Salesforce, Linux, Javascript, Apex (Java)
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2016 - August 2017</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Universidad Autónoma de Madrid</h3>
              <div className="subheading mb-3">Bachelor of Computer Engineering</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2011 - July 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">IMF Business School</h3>
              <div className="subheading mb-3">Business Analytics &amp; Big Data Msc</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Septembre 2018 - September 2020</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <div className="item">
                <i className="icon-python"></i>
                <div className="item-name">Python</div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="item">
                <i className="icon-java"></i>
                <div className="item-name">Java</div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="item">
                <i className="icon-node-dot-js"></i>
                <div className="item-name">NodeJS</div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="item">
                <i className="icon-javascript"></i>
                <div className="item-name">Javascript</div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="item">
                <i className="icon-typescript"></i>
                <div className="item-name">Typescript</div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="item">
                <i className="icon-angular"></i>
                <div className="item-name">Angular</div>
              </div>
            </li>
          </ul>

          <div className="subheading mb-3">
            Infraestructure
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <div className="item">
                <i className="icon-amazonaws"></i>
                <div className="item-name">AWS</div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="item">
                <i className="icon-microsoftazure"></i>
                <div className="item-name">Azure</div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="item">
                <i className="icon-git"></i>
                <div className="item-name">Git</div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="item">
                <i className="icon-jenkins"></i>
                <div className="item-name">Jenkins</div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="item">
                <i className="icon-linux"></i>
                <div className="item-name">Linux</div>
              </div>
            </li>
          </ul>

          <div className="subheading mb-3">
            Databases
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <div className="item">
                <i className="icon-mongodb"></i>
                <div className="item-name">Mongo</div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="item">
                <i className="icon-redis"></i>
                <div className="item-name">Redis</div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="item">
                <i className="icon-couchbase"></i>
                <div className="item-name">Couchbase</div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="item">
                <i className="icon-postgresql"></i>
                <div className="item-name">PostgreSQL</div>
              </div>
            </li>
            <li className="list-inline-item">
              <div className="item">
                <i className="icon-mysql"></i>
                <div className="item-name">MySQL - MariaDB</div>
              </div>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0 list-skills">
            <li>
              <i className="fa-li fa fa-check"></i>
              SOLID principles
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Focus on develop high quality software
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>

          <div className="subheading mb-3">SOFT</div>
          <ul className="fa-ul mb-0 list-skills">
            <li>
              <i className="fa-li fa fa-check"></i>
              Teamworking
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Critical thinking and autonomy in problem solving
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Communication
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Task Definition, Follow-through, and improvement
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Curiosity - not hesitate to learn new things to solve problems
            </li>
          </ul>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            When I am not developing, I am a person who likes to be with family and friends, read and nature.
            I love to play sports. For more than 15 years I have played football, even playing in the third national
            division of Spain. At present I do crossfit, running, swimming, trekking, indoor football and paddleball
            with friends.
          </p>
          <p className="mb-0">
            Another of my great passions is travelling, it allows me to discover new places, natural wonders of any kind,
            new cultures and ways of seeing life, as well as having the opportunity to meet fantastic people. During my
            childhood I had the opportunity to visit many European countries such as France, Germany, Italy, UK,
            Switzerland, Croatia. As I have grown up I have been able to visit places like the United States, Canada,
            Brazil, South Africa, India or Lebanon. I can't wait to start my new journey!
          </p>
        </div>
      </section>

      <hr className="m-0" />
    </div>
  </Layout>
);

export default IndexPage;
