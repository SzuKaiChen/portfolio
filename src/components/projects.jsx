import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/fashionxt.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/chienpeng/match-my-fashion-public-CodeCreators">FASHIONXT</a></h3>
											<h3>Web App to match complimentary resources in fashion industry.</h3>
											<h3>Skills: Ruby on Rails, PostgreSQL, AWS S3, and Heroku.</h3>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/rate.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://istm-631-rate-my-course.vercel.app/about-us">Rate My Course</a></h3>
											<h3>Web application aims to make the students well aware of the course structure beforehand.</h3>
											<h3>Skills: HTML, Javascript, Node.js, MySQL, and Vercel.</h3>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/SzuKaiChen/ISTM-637-Final-Project">Dominick's Food Data Warehouse</a></h3>
											<h3>Determined data warehouse schema and created data marts using Kimball's approach</h3>
											<h3>Skills: ETL, TypeScript, TSQL, SSRS, SSAS, Tableau, and MS SQL Server</h3>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/chicago.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Chicago Crime Analysis</a></h3>
											<h3>Processed Chicago crime data to categorized relatively safe and unsafe area</h3>
											<h3>Skills: Python, Pentaho Kettle, MaraiDB, AWS RDS, and Teableau</h3>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/datathon.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/kungchinglin/2020TamuDatathon">TAMU Datathon</a></h3>
											<h3>Developed website to recommend workshops for users who participate in TAMU datathon</h3>
											<h3>Skills: Python, HTML, Javascript, Tensorflow, and NLP</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}