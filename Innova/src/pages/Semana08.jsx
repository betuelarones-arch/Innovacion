// ======================================================================

import '../css/semana06.css';
import laserThumbnail from '../img/laser_thumbnail.jpg';
import laserVideo from '../media/Laser.mp4';
import autocadLaser from '../img/AuocadLaser.jpg';
import medicionConCarton from '../img/MedicionConCarton.jpeg';
import darleProfundidadCorte from '../img/DarleProfundidadCorte.jpeg';
import tiempoDeCortado from '../img/TiempodeCortado.jpeg';
import medicionHastaCiaga from '../img/MedicionHastaCiaga.jpeg';
import cayo from '../img/Cayo.jpeg';
import cajaCortadaPartes from '../img/cajaCortadaPartes.jpeg';
import corte from '../img/Corte.jpeg';
import cajitaBase from '../img/cajita base.jpeg';
import cajitaArmada from '../img/cajita armada.jpeg';
import cajitaArmada2 from '../img/cajitaaramada2.jpeg';

import scamperSustituir from '../img/scamper-sustituir.jpg';
import scamperCombinar from '../img/scamper-combinar.jpg';
import scamperAdaptar from '../img/scamper-adaptar.jpg';
import scamperModificar from '../img/scamper-modificar.jpg';
import scamperPoner from '../img/scamper-poner.jpg';
import scamperEliminar from '../img/scamper-eliminar.jpg';
import scamperReordenar from '../img/scamper-reordenar.jpg';

const Semana06 = () => {
	return (
		<>
			{/* HERO */}
			<section className="laser-hero">
				<div className="laser-hero-content container">
					<span className="badge">Fabricación Digital</span>
					<h1>Proceso de Corte Láser</h1>
					<p className="lead">
						Transformando el diseño digital en realidad mediante tecnología de corte láser de precisión.
					</p>
				</div>
			</section>

			{/* CONTENIDO PRINCIPAL */}
			<main className="container">
				{/* INTRODUCCIÓN */}
				<section className="section-title">
					<h2>Introducción al <em>Proceso</em></h2>
					<p className="section-subtitle">
						Fabricación digital con precisión milimétrica
					</p>
				</section>

				<section className="card pad">
					<p>
						El corte láser es una tecnología de fabricación digital que nos permite crear piezas precisas
						y complejas para nuestro espaldar ergonómico. Este proceso garantiza la exactitud dimensional
						y la repetibilidad necesaria para un producto de alta calidad.
					</p>
				</section>

				{/* VIDEO PRINCIPAL */}
				<section className="section-title">
					<h2>Proceso en <em>Acción</em></h2>
					<p className="section-subtitle">Video del corte láser en tiempo real</p>
				</section>

				<section className="card" style={{ padding: '12px' }}>
					<div className="video-container">
						<video controls poster={laserThumbnail}>
							<source src={laserVideo} type="video/mp4" />
							Tu navegador no soporta el elemento de video.
						</video>
					</div>
				</section>

				{/* ESPECIFICACIONES TÉCNICAS */}
				<section className="section-title">
					<h2>Especificaciones <em>Técnicas</em></h2>
				</section>

				<section className="specs-grid">
					<div className="spec-card">
						<div className="spec-icon">⚡</div>
						<h4>Potencia del Láser</h4>
						<p>80W CO₂ láser de alta precisión</p>
					</div>

					<div className="spec-card">
						<div className="spec-icon">📏</div>
						<h4>Precisión</h4>
						<p>±0.1mm de tolerancia dimensional</p>
					</div>

					<div className="spec-card">
						<div className="spec-icon">🎯</div>
						<h4>Velocidad</h4>
						<p>500mm/s velocidad de corte</p>
					</div>

					<div className="spec-card">
						<div className="spec-icon">📐</div>
						<h4>Material</h4>
						<p>Acrílico 3mm + MDF 5mm</p>
					</div>
				</section>

				{/* HERRAMIENTAS UTILIZADAS */}
				<section className="tools-section">
					<h3>Herramientas y Software Utilizados</h3>
					<div className="tools-grid">
						<div className="tool-item">
							<strong>Diseño CAD</strong>
							<p>AutoCAD / Fusion 360</p>
						</div>
						<div className="tool-item">
							<strong>Preparación</strong>
							<p>Adobe Illustrator</p>
						</div>
						<div className="tool-item">
							<strong>Control Láser</strong>
							<p>RDWorks / LightBurn</p>
						</div>
						<div className="tool-item">
							<strong>Máquina</strong>
							<p>Cortadora Láser CO₂</p>
						</div>
					</div>
				</section>

				{/* PROCESO PASO A PASO (TIMELINE) */}
				<section className="section-title">
					<h2>Proceso <em>Paso a Paso</em></h2>
				</section>

				<div className="process-timeline">
					{/* PASO 1 */}
					<div className="timeline-item">
						<div className="timeline-content card pad">
							<span className="step-number">1</span>
							<h3>Diseño Digital</h3>
							<p>
								Creación del modelo 3D y exportación de los planos de corte en formato vectorial.
								Se definen las dimensiones exactas y las líneas de corte.
							</p>
							<ul className="bullets">
								<li>Modelado en CAD</li>
								<li>Exportación a .DXF o .SVG</li>
								<li>Verificación de medidas</li>
							</ul>
						</div>
						<div className="timeline-media card">
							<img src={autocadLaser} alt="Diseño digital en CAD" loading="lazy" />
							<figcaption>Diseño digital preparado para corte</figcaption>
						</div>
					</div>

					{/* PASO 2 */}
					<div className="timeline-item">
						<div className="timeline-content card pad">
							<span className="step-number">2</span>
							<h3>Preparación del Material</h3>
							<p>
								Selección y preparación del material base. Limpieza de la superficie y fijación
								en la plataforma de la cortadora láser.
							</p>
							<ul className="bullets">
								<li>Verificación del material</li>
								<li>Limpieza de superficie</li>
								<li>Fijación y nivelación</li>
							</ul>
						</div>
						<div className="timeline-media card">
							<img src={medicionConCarton} alt="Preparación del material" loading="lazy" />
							<figcaption>Material listo para corte</figcaption>
						</div>
					</div>

					{/* PASO 3 */}
					<div className="timeline-item">
						<div className="timeline-content card pad">
							<span className="step-number">3</span>
							<h3>Configuración de Parámetros</h3>
							<p>
								Ajuste de la potencia, velocidad y frecuencia del láser según el tipo y grosor
								del material a cortar.
							</p>
							<ul className="bullets">
								<li>Potencia: 70-80%</li>
								<li>Velocidad: 450-500mm/s</li>
								<li>Enfoque del láser</li>
							</ul>
						</div>
						<div className="timeline-media card">
							<img src={darleProfundidadCorte} alt="Configuración de parámetros" loading="lazy" />
							<figcaption>Panel de control de la máquina</figcaption>
						</div>
					</div>

					{/* PASO 4 */}
					<div className="timeline-item">
						<div className="timeline-content card pad">
							<span className="step-number">4</span>
							<h3>Proceso de Corte</h3>
							<p>
								Ejecución del corte láser. El haz láser sigue las trayectorias programadas
								con precisión milimétrica, vaporizando el material.
							</p>
							<ul className="bullets">
								<li>Corte automático</li>
								<li>Supervisión constante</li>
								<li>Control de temperatura</li>
							</ul>
						</div>
						<div className="timeline-media card">
							<img src={tiempoDeCortado} alt="Proceso de corte en acción" loading="lazy" />
							<figcaption>Corte láser en proceso</figcaption>
						</div>
					</div>

					{/* PASO 5 */}
					<div className="timeline-item">
						<div className="timeline-content card pad">
							<span className="step-number">5</span>
							<h3>Post-Procesamiento</h3>
							<p>
								Limpieza de las piezas cortadas, remoción de residuos y verificación
								de las dimensiones finales.
							</p>
							<ul className="bullets">
								<li>Limpieza de bordes</li>
								<li>Verificación dimensional</li>
								<li>Control de calidad</li>
							</ul>
						</div>
						<div className="timeline-media card">
							<img src={medicionHastaCiaga} alt="Piezas terminadas" loading="lazy" />
							<figcaption>Piezas cortadas y limpias</figcaption>
						</div>
					</div>
				</div>

				{/* ANTES Y DESPUÉS */}
				<section className="section-title">
					<h2>Antes y <em>Después</em></h2>
				</section>

				<div className="before-after">
					<div className="ba-item">
						<span className="ba-label">ANTES</span>
						<figure className="card media">
							<img src={cayo} alt="Material antes del corte" loading="lazy" />
							<figcaption>Material virgen antes del proceso</figcaption>
						</figure>
					</div>

					<div className="ba-item">
						<span className="ba-label">DESPUÉS</span>
						<figure className="card media">
							<img src={cajaCortadaPartes} alt="Piezas cortadas" loading="lazy" />
							<figcaption>Piezas terminadas con precisión láser</figcaption>
						</figure>
					</div>
				</div>

				{/* GALERÍA DE IMÁGENES */}
				<section className="section-title">
					<h2>Galería del <em>Proceso</em></h2>
					<p className="section-subtitle">Explora cada detalle del corte láser</p>
				</section>

				<div className="gallery-grid">
					<div className="gallery-item card">
						<img src={corte} alt="Detalle del corte láser" loading="lazy" />
						<div className="gallery-caption">Precisión en cada corte</div>
					</div>

					<div className="gallery-item card">
						<img src={cayo} alt="Máquina en funcionamiento" loading="lazy" />
						<div className="gallery-caption">Tecnología de punta</div>
					</div>

					<div className="gallery-item card">
						<img src={cajaCortadaPartes} alt="Piezas cortadas" loading="lazy" />
						<div className="gallery-caption">Resultado final</div>
					</div>

					<div className="gallery-item card">
						<img src={cajitaBase} alt="Detalle de bordes" loading="lazy" />
						<div className="gallery-caption">Bordes limpios y precisos</div>
					</div>

					<div className="gallery-item card">
						<img src={cajitaArmada} alt="Vista del láser" loading="lazy" />
						<div className="gallery-caption">Haz láser en acción</div>
					</div>

					<div className="gallery-item card">
						<img src={cajitaArmada2} alt="Ensamble de piezas" loading="lazy" />
						<div className="gallery-caption">Listo para ensamblar</div>
					</div>
				</div>

				{/* RESULTADOS Y CONCLUSIONES */}
				<section className="section-title">
					<h2>Resultados y <em>Conclusiones</em></h2>
				</section>

				<section className="card pad">
					<h3>Logros Obtenidos</h3>
					<ul className="checks">
						<li>Precisión dimensional de ±0.1mm en todas las piezas</li>
						<li>Bordes limpios sin necesidad de acabado adicional</li>
						<li>Tiempo de producción reducido en 60% vs métodos tradicionales</li>
						<li>Repetibilidad perfecta para producción en serie</li>
						<li>Desperdicio de material minimizado al 5%</li>
					</ul>

					<div className="highlight">
						<p>
							<strong>Conclusión:</strong> El corte láser demostró ser la tecnología ideal para
							fabricar las piezas de nuestro espaldar ergonómico, ofreciendo <em>precisión,
								velocidad y eficiencia</em> superiores a métodos convencionales.
						</p>
					</div>
				</section>

				{/* PRÓXIMOS PASOS */}
				<section className="next-steps-card">
					<h3>Próximos Pasos</h3>
					<ul className="bullets">
						<li>Ensamble de las piezas cortadas</li>
						<li>Integración con componentes electrónicos</li>
						<li>Pruebas de durabilidad y confort</li>
						<li>Iteración del diseño basado en feedback</li>
					</ul>
				</section>

				{/* SECCIÓN SCAMPER */}
				<section className="section-title">
					<h2>Técnica <em>SCAMPER</em></h2>
					<p className="section-subtitle">Aplicación de la metodología SCAMPER en el desarrollo del producto</p>
				</section>

				<section className="scamper-grid">
					<div className="scamper-card">
						<img src={scamperSustituir} alt="Sustituir" className="scamper-img" />
						<h4>S – Sustituir</h4>
						<p>Reemplazamos materiales rígidos por acrílico flexible, mejorando la ergonomía y reduciendo el peso total del producto.</p>
					</div>

					<div className="scamper-card">
						<img src={scamperCombinar} alt="Combinar" className="scamper-img" />
						<h4>C – Combinar</h4>
						<p>Se fusionó el uso del corte láser con la impresión 3D, logrando un diseño más preciso, resistente y con acabados uniformes.</p>
					</div>

					<div className="scamper-card">
						<img src={scamperAdaptar} alt="Adaptar" className="scamper-img" />
						<h4>A – Adaptar</h4>
						<p>El diseño del respaldo se adaptó para ajustarse a distintas alturas y contexturas físicas, aumentando la comodidad del usuario.</p>
					</div>

					<div className="scamper-card">
						<img src={scamperModificar} alt="Modificar" className="scamper-img" />
						<h4>M – Modificar</h4>
						<p>Se modificaron las uniones y el ensamblaje, reduciendo el tiempo de armado y mejorando la estética del producto final.</p>
					</div>

					<div className="scamper-card">
						<img src={scamperPoner} alt="Poner en otro uso" className="scamper-img" />
						<h4>P – Poner en otro uso</h4>
						<p>El diseño puede ser reutilizado para fabricar sillas escolares o de oficina sin alterar su estructura principal.</p>
					</div>

					<div className="scamper-card">
						<img src={scamperEliminar} alt="Eliminar" className="scamper-img" />
						<h4>E – Eliminar</h4>
						<p>Se eliminaron piezas innecesarias que incrementaban el peso, optimizando el transporte y la funcionalidad.</p>
					</div>

					<div className="scamper-card">
						<img src={scamperReordenar} alt="Reordenar" className="scamper-img" />
						<h4>R – Reordenar</h4>
						<p>Se reestructuró el orden del ensamblaje, facilitando el flujo de trabajo y reduciendo los errores en la producción.</p>
					</div>
				</section>
			</main>
		</>
	);
};

export default Semana06;