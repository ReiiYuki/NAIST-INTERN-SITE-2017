import React from 'react'
import img1 from './1.png'
import img2 from './2.jpg'

export default class IMD extends React.Component {

		render(){

			const whiteBg = {
				backgroundColor: 'white',
				marginBottom: '0px'
			}

			return (
				<div className="jumbotron jumbotron-fluid" style={whiteBg} id="lab-imd">
					<div className="container">
						<div className="row">
							<div className="col">
								<h1>Interactive Media Design (IMD)</h1>
							</div>
						</div>
						<div className="row">
							<div className="col-md-5">
								<img src={img1} className="img-fluid" />
							</div>
							<div className="col-md-7">
								<div className="row">
									<div className="col">
										<p>สวัสดีครับ เราโอ๊ต ในปีนี้เราได้มีโอกาสไป ฝึกงานอยู่ที่แลป IMD</p>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<p>
											ก่อนอื่นเลย เราขอเกริ่นเกี่ยวกับที่แลปก่อน IMD เป็นแลปที่ทำงานวิจัยเกี่ยว Interaction, HMD, Haptic Device, Computer Vision, AR, VR, Image Processing และอื่นๆอีกเพียบ แลปตั้งอยู่บนชั้น7ของตึก A มี Kato-Sensei และ Sandor-Sensei เป็นหัวหน้า และรองหัวหน้าแลป ตามลำดับ แลปนี้น่าจะมีชาวต่างชาติอาศัยอยู๋เยอะที่สุดและ(เกินครึ่งแลปเป็นชาวต่างชาติทั้งหมด) ดังนั้นภาษาหลักที่ใช้ในแลปจึงเป็น ภาษาอังกฤษ ถือว่าโชคดีสำหรับเรามากๆ 555 และโชคดียิ่งกว่า ที่แลปนี้มีพี่คนไทยคนนึงชื่อ พี่เติ้ล ที่คอยช่วยเหลือเรามาโดยตลอด ^^
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-9">
								<div className="row">
									<div className="col">
										<p>
											หัวข้อวิจัยที่เราได้รับ คือ "Multimodal Interaction with Optical See-Through Head-Mounted Displays" เป็นเรื่องเกี่ยวกับ การเพิ่ม Interaction ให้กับ Optical Head-Mounted Displays Device เพราะในปัจจุบันHMD ส่วนมากยังมี Interaction ที่จำกัดมากๆ เช่นใช้ ท่าทางในการควบคุมได้ 2 ท่าอะไรงี้ สิ่งที่เราทำขึ้น ก็เพื่อแก้ปัญหาพวกนี้แหละ
										</p>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<p>
											อาจารย์ที่ดูแล งานของเรา ชื่อ Alexander Plopski เป็นคนเยอรมัน-รัสเซีย โดยปกติ อาจารย์แก ทำวิจัยเกี่ยวกับเรื่อง Gaze Control คือใช้ข้อมูลจากตาในการเอามาทำนู่นนี่นั่น ในงานนี้ เราเลยแบ่งออกเป็น 2 ส่วนคือ เรื่อง Gesture Control ที่เราสนใจ กับ Gaze Control ที่อาจารย์สนใจ เป้าหมายหลักของงานเราคือ การทำให้เราสามารถใช้มือควบคุม AR Environment ได้อย่างอิสระ (ระบบมันจะรู้ว่าเราทำมือยังไง มือของเราอยู่ตรงไหน) กับ การทำให้ระบบรู้ว่า ตอนนี้เราจ้องไปที่จุดๆไหน โอ้วลืมบอกเลย OST-HMD ที่เราใช้ในงานนี้คือ Microsoft HoloLens
										</p>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<p>
											เราขอยอมรับเลยว่า 555 ทำงานนี้มันไม่หมูเท่าไหร่เลย แต่ก็ถือเป็นประสบการณ์ที่ดีมากที่ได้ลองอะไรใหม่ๆ แต่ก็ค่อนข้างกดดันอย่างมากเลยทีเดียว เพราะดูอาจารย์แกคาดหวังกับเรามาก 555 สิ่งที่ยากที่สุดในการฝึกงานครั้งนี้ คือ การเขียน Report จบ อาจารย์แกตรวจละเอียดมากกก Grammarเรานี่เละเป็นขี้เลยทีเดียว 555 แต่ก็ได้ Final Version ที่ต้องตามหลักนะ
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-3">
								<img src={img2} className="img-fluid" />
							</div>
						</div>
						<div className="row">
							<div className="col">
								<p>
									พักเรื่องเครียดๆ มาพูดถึงชีวิตในแลปบ้าง คนญี่ปุ่นในแลปนี้ ส่วนมากจะพูดอังกฤษได้ค่อนข้างโอเค ถ้าไม่ได้เขาก็จะกด Google Translate คุยกับเรา แรกๆ เราอาจจะรู้สึกว่าพวกเขาเงียบจังเลย พอได้คุยกันเริ่มสนิทกันเท่านั้นแหละ คุยกันไม่หยุดเลย 555 จนงาน(ของเรา) นี่ไม่เดินเลยทีเดียว ส่วนชาวต่างชาติในแลปทุกคนก็พูดอังกฤษได้เช่นกัน แต่ที่น่าทึ่งกว่าคือ ทุกคนก็พูดญี่ปุ่นได้เช่นกัน =[]=!!!! เห็นหน้าฝรั่งๆ พูดญี่ปุ่นคล่องปรื่อๆ เลยทีเดียว แลปนี้อยู่ดีกินดี ที่แลปจะมีพื้นที่ส่วนนึงเรียกว่า Usual Place เป็นที่ที่ แบบพอมีใครไปไหน จะหย่อนของฝากทิ้งไว้ เราก็สามารถ เอาของไปแชร์ หรือว่าไปกินของที่เขาซื้อมาฝากได้  ที่แลป จะมีปาร์ตี้ ต้อนรับกับเลี้ยงส่งคนที่มากับกลับ เพราะที่แลปจะมี เด็กอินเทิร์น มาหมุนเวียนตลอดๆ แต่เสียดายเราหาไฟล์รูปไม่เจอ นอกจากนี้ เรายังได้มีโอกาสเข้าไปร่วมเป็น participant ใน conference ชื่อ ISUVR ด้วยแหละ ถือว่าเป็นประสบการณ์ที่ดีครั้งหนึ่งเลยทีเดียว ทำให้เราได้รับรู้มุมมองต่างๆ ในการวิจัย และทำความรู้จักนักวิจัย จากหลายๆชาติด้วย
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<p>
									เล่ามาเยอะพอและ ทั้งนี้ขอทิ้งท้ายไว้ว่า ถ้าเกิดใครสนใจใน AR VR เราขอแนะนำให้มาที่แลปนี้ รับรอง ไม่ทำให้ผิดหวังแน่นอน 
								</p>
							</div>
						</div>
					</div>
				</div>
			)
		}

}
