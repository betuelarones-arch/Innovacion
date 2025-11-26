import '../css/semana08.css';
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
			<section id="laser-hero" className="laser-hero">
				<div className="laser-hero-content container">
					<span className="badge">Fabricación Digital</span>
					<h1>Proceso de Corte Láser</h1>
					<p className="lead">
						Transformando el diseño digital en realidad mediante tecnología de corte láser de precisión.
					</p>
				</div>
			</section>

			<main className="container">

				{/* INTRODUCCIÓN */}
				<section id="intro" className="section__title">
					<h2>Introducción al <em>Proceso</em></h2>
					<p className="section__subtitle">Fabricación digital con precisión milimétrica</p>
				</section>

				<section id="intro-card" className="card card--pad">
					<p>
						El corte láser es una tecnología de fabricación digital que nos permite crear piezas precisas
						y complejas para nuestro espaldar ergonómico...
					</p>
				</section>

				{/* VIDEO */}
				<section id="video-title" className="section__title">
					<h2>Proceso en <em>Acción</em></h2>
					<p className="section__subtitle">Video del corte láser en tiempo real</p>
				</section>

				<section id="video-section" className="card card--video">
					<div className="video-container">
						<video controls poster={laserThumbnail}>
							<source src={laserVideo} type="video/mp4" />
							Tu navegador no soporta el elemento de video.
						</video>
					</div>
				</section>

				{/* ESPECIFICACIONES */}
				<section id="specs-title" className="section__title">
					<h2>Especificaciones <em>Técnicas</em></h2>
				</section>

				<section id="specs-grid" className="specs__grid">
					<div className="spec__card">
						<div className="spec__icon">⚡</div>
						<h4>Potencia del Láser</h4>
						<p>80W CO₂ láser de alta precisión</p>
					</div>

					<div className="spec__card">
						<div className="spec__icon">📏</div>
						<h4>Precisión</h4>
						<p>±0.1mm de tolerancia dimensional</p>
					</div>

					<div className="spec__card">
						<div className="spec__icon">🎯</div>
						<h4>Velocidad</h4>
						<p>500mm/s velocidad de corte</p>
					</div>

					<div className="spec__card">
						<div className="spec__icon">📐</div>
						<h4>Material</h4>
						<p>Acrílico 3mm + MDF 5mm</p>
					</div>
				</section>

				{/* HERRAMIENTAS */}
				<section id="tools" className="tools__section">
					<h3>Herramientas y Software Utilizados</h3>
					<div className="tools__grid">
						<div className="tool__item"><strong>Diseño CAD</strong><p>AutoCAD / Fusion 360</p></div>
						<div className="tool__item"><strong>Preparación</strong><p>Adobe Illustrator</p></div>
						<div className="tool__item"><strong>Control Láser</strong><p>RDWorks / LightBurn</p></div>
						<div className="tool__item"><strong>Máquina</strong><p>Cortadora Láser CO₂</p></div>
					</div>
				</section>

				{/* TIMELINE */}
				<section id="timeline-title" className="section__title">
					<h2>Proceso <em>Paso a Paso</em></h2>
				</section>

				<div id="timeline" className="timeline">

					{/* PASO 1 */}
					<div id="step-1" className="timeline__item">
						<div className="timeline__content card card--pad">
							<span className="step__number">1</span>
							<h3>Diseño Digital</h3>
							<p>Creación del modelo 3D...</p>
							<ul className="bullets">
								<li>Modelado en CAD</li>
								<li>Exportación a .DXF o .SVG</li>
								<li>Verificación de medidas</li>
							</ul>
						</div>
						<div className="timeline__media card">
							<img src={autocadLaser} alt="Diseño digital" />
							<figcaption>Diseño digital preparado para corte</figcaption>
						</div>
					</div>

					{/* PASO 2 */}
					<div id="step-2" className="timeline__item">
						<div className="timeline__content card card--pad">
							<span className="step__number">2</span>
							<h3>Preparación del Material</h3>
							<p>Selección y preparación del material base...</p>
							<ul className="bullets">
								<li>Verificación del material</li>
								<li>Limpieza de superficie</li>
								<li>Fijación y nivelación</li>
							</ul>
						</div>
						<div className="timeline__media card">
							<img src={medicionConCarton} alt="Preparación del material" />
							<figcaption>Material listo para corte</figcaption>
						</div>
					</div>

					{/* PASO 3 */}
					<div id="step-3" className="timeline__item">
						<div className="timeline__content card card--pad">
							<span className="step__number">3</span>
							<h3>Configuración de Parámetros</h3>
							<p>Ajuste de la potencia, velocidad y frecuencia...</p>
							<ul className="bullets">
								<li>Potencia: 70-80%</li>
								<li>Velocidad: 450-500mm/s</li>
								<li>Enfoque del láser</li>
							</ul>
						</div>
						<div className="timeline__media card">
							<img src={darleProfundidadCorte} alt="Configuración de parámetros" />
							<figcaption>Panel de control</figcaption>
						</div>
					</div>

					{/* PASO 4 */}
					<div id="step-4" className="timeline__item">
						<div className="timeline__content card card--pad">
							<span className="step__number">4</span>
							<h3>Proceso de Corte</h3>
							<p>Ejecución del corte láser...</p>
							<ul className="bullets">
								<li>Corte automático</li>
								<li>Supervisión constante</li>
								<li>Control de temperatura</li>
							</ul>
						</div>
						<div className="timeline__media card">
							<img src={tiempoDeCortado} alt="Corte láser" />
							<figcaption>Corte láser en proceso</figcaption>
						</div>
					</div>

					{/* PASO 5 */}
					<div id="step-5" className="timeline__item">
						<div className="timeline__content card card--pad">
							<span className="step__number">5</span>
							<h3>Post-Procesamiento</h3>
							<p>Limpieza y verificación final...</p>
							<ul className="bullets">
								<li>Limpieza de bordes</li>
								<li>Verificación dimensional</li>
								<li>Control de calidad</li>
							</ul>
						</div>
						<div className="timeline__media card">
							<img src={medicionHastaCiaga} alt="Piezas terminadas" />
							<figcaption>Piezas cortadas</figcaption>
						</div>
					</div>

				</div>

				{/* ANTES Y DESPUÉS */}
				<section id="before-after-title" className="section__title">
					<h2>Antes y <em>Después</em></h2>
				</section>

				<div id="before-after" className="beforeAfter">
					<div className="beforeAfter__item">
						<span className="beforeAfter__label">ANTES</span>
						<figure className="card media">
							<img src={cayo} alt="Antes" />
							<figcaption>Material antes del corte</figcaption>
						</figure>
					</div>

					<div className="beforeAfter__item">
						<span className="beforeAfter__label">DESPUÉS</span>
						<figure className="card media">
							<img src={cajaCortadaPartes} alt="Después" />
							<figcaption>Piezas terminadas</figcaption>
						</figure>
					</div>
				</div>

				{/* GALERÍA */}
				<section id="gallery-title" className="section__title">
					<h2>Galería del <em>Proceso</em></h2>
					<p className="section__subtitle">Explora cada detalle del corte láser</p>
				</section>

				<div id="gallery" className="gallery__grid">
					<div className="gallery__item card">
						<img src={corte} alt="Detalle" />
						<div className="gallery__caption">Precisión en cada corte</div>
					</div>

					<div className="gallery__item card">
						<img src={cayo} alt="Máquina" />
						<div className="gallery__caption">Tecnología de punta</div>
					</div>

					<div className="gallery__item card">
						<img src={cajaCortadaPartes} alt="Resultado" />
						<div className="gallery__caption">Resultado final</div>
					</div>

					<div className="gallery__item card">
						<img src={cajitaBase} alt="Bordes" />
						<div className="gallery__caption">Bordes limpios</div>
					</div>

					<div className="gallery__item card">
						<img src={cajitaArmada} alt="Láser" />
						<div className="gallery__caption">Haz láser en acción</div>
					</div>

					<div className="gallery__item card">
						<img src={cajitaArmada2} alt="Ensamble" />
						<div className="gallery__caption">Listo para ensamblar</div>
					</div>
				</div>

				{/* RESULTADOS */}
				<section id="results-title" className="section__title">
					<h2>Resultados y <em>Conclusiones</em></h2>
				</section>

				<section id="results" className="card card--pad">
					<h3>Logros Obtenidos</h3>
					<ul className="checks">
						<li>Precisión dimensional ±0.1mm</li>
						<li>Bordes limpios</li>
						<li>Producción 60% más rápida</li>
						<li>Repetibilidad perfecta</li>
						<li>Desperdicio mínimo</li>
					</ul>

					<div className="highlight">
						<p><strong>Conclusión:</strong> El corte láser fue la tecnología ideal...</p>
					</div>
				</section>

				{/* PRÓXIMOS PASOS */}
				<section id="next-steps" className="nextSteps__card">
					<h3>Próximos Pasos</h3>
					<ul className="bullets">
						<li>Ensamble</li>
						<li>Integración electrónica</li>
						<li>Pruebas</li>
						<li>Iteración</li>
					</ul>
				</section>

				{/* SCAMPER */}
				<section id="scamper-title" className="section__title">
					<h2>Técnica <em>SCAMPER</em></h2>
					<p className="section__subtitle">Aplicación de la metodología SCAMPER</p>
				</section>

				<section id="scamper" className="scamper__grid">

					<div id="scamper-sustituir" className="scamper__card">
						<img src={scamperSustituir} alt="Sustituir" className="scamper__img" />
						<h4>S – Sustituir</h4>
						<p>Reemplazamos materiales rígidos...</p>
					</div>

					<div id="scamper-combinar" className="scamper__card">
						<img src={scamperCombinar} alt="Combinar" className="scamper__img" />
						<h4>C – Combinar</h4>
						<p>Se fusionó el uso del corte láser...</p>
					</div>

					<div id="scamper-adaptar" className="scamper__card">
						<img src={scamperAdaptar} alt="Adaptar" className="scamper__img" />
						<h4>A – Adaptar</h4>
						<p>El diseño se adaptó para distintas alturas...</p>
					</div>

					<div id="scamper-modificar" className="scamper__card">
						<img src={scamperModificar} alt="Modificar" className="scamper__img" />
						<h4>M – Modificar</h4>
						<p>Se modificaron las uniones...</p>
					</div>

					<div id="scamper-poner" className="scamper__card">
						<img src={scamperPoner} alt="Poner en otro uso" className="scamper__img" />
						<h4>P – Poner en otro uso</h4>
						<p>Puede reutilizarse para sillas...</p>
					</div>

					<div id="scamper-eliminar" className="scamper__card">
						<img src={scamperEliminar} alt="Eliminar" className="scamper__img" />
						<h4>E – Eliminar</h4>
						<p>Se eliminaron piezas innecesarias...</p>
					</div>

					<div id="scamper-reordenar" className="scamper__card">
						<img src={scamperReordenar} alt="Reordenar" className="scamper__img" />
						<h4>R – Reordenar</h4>
						<p>Se reestructuró el orden del ensamblaje...</p>
					</div>

				</section>

			</main>
		</>
	);
};

export default Semana06;
