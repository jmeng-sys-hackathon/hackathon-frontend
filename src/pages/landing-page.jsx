import React from "react";
import NavigationBar from "../components/NavigationBar";
import Card from "../components/Card";

import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LandingPage = () => {
	return (
		<div>
			<NavigationBar />
			<LandingPageMainImageContainer>
				<div className="inner-container">
					<img className="landing-image" alt="" src={require("../img/main-image.png")}/>
					<div className="landing-image-overlay">
						<p>Discover. Experience. Connect.</p>
					</div>
				</div>
			</LandingPageMainImageContainer>
			<SurveyBtnWrapper className="flex-center">
				<div style={{width: "830px", padding: "0 15px"}}>
					<Row>
						<Col style={{paddingRight: "40px"}}>
							<Button className="w-100 btn-survey" variant="primary">
								I am Local - Ready for my perfect day!
							</Button>{' '}
						</Col>
						<Col style={{paddingLeft: "40px"}}>
							<Button className="w-100 btn-survey" variant="primary" href="https://www.figma.com/proto/LmjaNssVyk8qvjkR8ru5K3/YYC-HackApp-Design?page-id=0%3A1&node-id=18%3A33611&viewport=338%2C495%2C0.11&scaling=min-zoom&starting-point-node-id=18%3A33611&show-proto-sidebar=1&hide-ui=1">
								From Out of Town - Coming in Hot!
							</Button>{' '}
						</Col>
					</Row>
				</div>
			</SurveyBtnWrapper>
			<ReviewCardsWrapper className="flex-center">
				<Card title="'A real sense of community, nurtured'" 
					  subtitle="Really appreciate the help and support from the staff during these tough times. Shoutout to Katie..." 					  
					  imgalt="image1" 
					  img={require("../img/pic-1.PNG")}
					  rating={5}
				/>
				<Card title="'The facilities are superb, clean, and bright.'" 
					  subtitle="Really appreciate the help and support from the staff during..."	  
					  imgalt="image1" 
					  img={require("../img/pic-2.png")}
					  rating={4}
				/>
				<Card title="'The facilities are superb, clean, and bright.'" 
					  subtitle="Really appreciate the help and support from the staff during..."	  
					  imgalt="image1" 
					  img={require("../img/pic-3.jpeg")}
					  rating={5}
				/>
			</ReviewCardsWrapper>
		</div>
	);
}

export default LandingPage;


const LandingPageMainImageContainer = styled.div`

	display: flex;
	justify-content: center;

	padding-top: 120px;

	.inner-container {
		position: relative;
		display: flex;

		background: linear-gradient(360deg, rgba(0, 0, 0, 0) 15.58%, rgba(0, 0, 0, 0.8) 115.58%);

		border-width: 4px;
		border-radius: 10px;
	}

	.landing-image {
		width: auto;
		height: 67vh;

		border-radius: 10px;
		padding: 8px;
	}

	.landing-image-overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background: linear-gradient(360deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%);

		z-index: 10;

		border-radius: 10px;

		p {
			text-align: center;
			color: white;
			font-size: 2.8em;
			font-weight:bold;

			margin-top: 180px;

			font-family: "Roboto";
		}
	}
`;


const SurveyBtnWrapper = styled.div`

	margin: 30px 0;

	.btn-survey {
		border-radius: 20px;
		padding-top: 20px;
		padding-bottom: 20px;

		background: hsl(211, 97%, 34%);
	}

	.btn-survey:hover {
		background: hsl(211, 97%, 45%);
	}
`;

const ReviewCardsWrapper = styled.div`
`;