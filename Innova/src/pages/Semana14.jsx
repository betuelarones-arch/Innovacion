import React from 'react';

import '../css/semana14.css';
import '../img/final.jpg';

export default function Semana14() {
    // Datos de los 4 prototipos de impresión
    const prototypes = [
        {
            version: 'V1.0 (Base)',
            date: '01/11/2025',
            image: '../img/final.jpg',
            issue: 'Fallo Crítico: Adhesión y Warping (Deformación)',
            solution: 'Ajuste de Cama: Incremento de la temperatura de la cama a 60°C y uso de Brim.',
            analysis: 'La falta de temperatura adecuada generó contracción desigual del material, levantando las esquinas y arruinando las primeras capas.',
        },
        {
            version: 'V2.0 (Estructural)',
            date: '03/11/2025',
            image: '../img/prototype-v2-cracked.jpg',
            issue: 'Fallo Crítico: Debilidad Estructural en el Eje Z',
            solution: 'Refuerzo: Aumento del espesor de pared a 1.2mm (4 perímetros) y reducción de la velocidad de impresión a 50mm/s.',
            analysis: 'Las paredes delgadas no soportaron la carga lateral y se fracturaron fácilmente. El aumento de perímetros mejoró significativamente la resistencia en la dirección Z.',
        },
        {
            version: 'V3.0 (Ensamblaje)',
            date: '05/11/2025',
            image: '../img/prototype-v3-fit-issue.jpg',
            issue: 'Fallo Crítico: Interferencia Dimensional en el Ensamblaje',
            solution: 'Corrección CAD: Aumento de la holgura (tolerancia) de diseño en 0.2mm en todas las superficies de contacto para garantizar un ajuste suave.',
            analysis: 'La tolerancia inicial de 0.1mm no fue suficiente para compensar la expansión térmica y la inexactitud de la impresión, resultando en un ensamblaje forzado.',
        },
        {
            version: 'V4.0 (Final)',
            date: '07/11/2025',
            image: '../img/prototype-v4-final.jpg',
            issue: 'Validación: Funcionalidad y Acabado Superficial',
            solution: 'Optimización de Flujo: Calibración del flujo (Flow) al 98% y reducción del ventilador de capa para un acabado más liso.',
            analysis: 'El modelo final cumple con todos los requisitos. Los ajustes de laminado se enfocaron en la estética sin comprometer la integridad estructural.',
        },
    ];

    // Datos del producto final
    const finalProduct = {
        name: 'Prototipo Final V4.0',
        videoUrl: 'https://www.youtube.com/embed/XXXXXXX?autoplay=0&rel=0', // Simulación de un link de YouTube
        features: [
            'Resistencia Estructural Verificada (Test de Carga)',
            'Ensamblaje Modular Perfecto (Tolerancia 0.2mm)',
            'Ergonomía Validada por Usuario Final',
            'Acabado Superficial de Grado Profesional',
        ],
    };

    return (
        <div className="weekly-report-page">
            {/* 1. HERO - Entrega Final */}
            <section className="hero-main weekly-hero">
                <div className="hero-layer"></div>
                <div className="hero-content container">
                    <span className="badge">Semana 14 | ENTREGA FINAL</span>
                    <h1 className="weekly-title">
                        Lanzamiento Oficial: <span className="highlight-text">El Producto Terminado</span>
                    </h1>
                    <p className="lead">
                        Presentación del prototipo validado, documentación de la metodología iterativa y el video promocional de la marca.
                    </p>
                    <a href="#video-promo" className="btn primary final-cta">
                        Ver Video Promocional 🎬
                    </a>
                </div>
            </section>

            {/* 2. SECCIÓN DE VIDEO PROMOCIONAL - Estilo Landing Page */}
            <section id="video-promo" className="video-section container">
                <div className="section-header centered">
                    <span className="section-number">Presentación de Marca</span>
                    <h2>Conoce Nuestro Producto <em className="brand-text">en Acción</em></h2>
                    <p className="section-subtitle">Visualiza la funcionalidad, el diseño y los beneficios clave del prototipo final, presentado como un anuncio profesional.</p>
                </div>

                <div className="video-player-wrapper card">
                    <iframe
                        width="100%"
                        height="500"
                        src={finalProduct.videoUrl}
                        title="Video Promocional Oficial del Producto"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="product-video"
                    ></iframe>
                </div>

                <div className="video-features-grid">
                    {finalProduct.features.map((feature, index) => (
                        <div key={index} className="feature-box card">
                            <span className="feature-icon-lg">⭐</span>
                            <p>{feature}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* 3. PRODUCTO FINAL VALIDADO (Destacando el V4.0) */}
            <section className="final-product-section container">
                <div className="section-header">
                    <span className="section-number">Resultado Final</span>
                    <h2>El Prototipo <em className="brand-text">Validado</em> V4.0</h2>
                    <p className="section-subtitle">El modelo que superó todas las pruebas de impresión y cumple con los estándares de diseño y funcionalidad.</p>
                </div>

                <div className="final-product-content">
                    <div className="final-product-image-wrapper card">
                        <img src={prototypes[3].image} alt="Producto Final V4.0" className="final-product-image" />
                    </div>
                    <div className="final-product-details">
                        <h3 className="final-name">{finalProduct.name}</h3>
                        <p className="final-desc">El resultado del proceso iterativo. Tras tres fallos críticos, esta versión representa la culminación del diseño y la optimización de los parámetros de impresión 3D, listo para su producción.</p>

                        <div className="key-specs-list">
                            <div className="spec-item"><strong>Material:</strong> PLA de Alta Resistencia</div>
                            <div className="spec-item"><strong>Método:</strong> FDM (Fused Deposition Modeling)</div>
                            <div className="spec-item"><strong>Tiempo Total de Impresión:</strong> ~4.0 horas</div>
                        </div>

                        <a href="#conclusion" className="btn ghost final-cta">
                            Ver Análisis Iterativo Completo
                        </a>
                    </div>
                </div>
            </section>

            {/* 4. GRID DE PROTOTIPOS (4 Iteraciones, ahora más detallado) */}
            <section className="iteration-section container">
                <div className="section-header centered">
                    <span className="section-number">Documentación Técnica</span>
                    <h2>Proceso Iterativo: <em className="brand-text">Fallo y Mejora</em></h2>
                    <p className="section-subtitle">Análisis detallado de cada una de las 4 pruebas de impresión, los problemas encontrados y las soluciones implementadas en el diseño o el laminado.</p>
                </div>

                <div className="iteration-grid">
                    {prototypes.map((p, index) => (
                        <div key={index} className="prototype-card iteration-detail-card card">
                            <h3 className="prototype-version">{p.version}</h3>
                            <p className="prototype-date">{p.date}</p>

                            <div className="prototype-image-wrapper">
                                <img src={p.image} alt={`Prototipo ${p.version}`} />
                            </div>

                            <div className="prototype-details">
                                <div className="detail-block issue-block">
                                    <p className="issue-label">🚫 Fallo Crítico:</p>
                                    <p className="issue-desc">{p.issue}</p>
                                    <p className="issue-analysis">**Análisis:** {p.analysis}</p>
                                </div>
                                <div className="detail-block solution-block">
                                    <p className="solution-label">✅ Solución Implementada:</p>
                                    <p className="solution-desc">{p.solution}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CONCLUSIÓN (Cierre Empresarial) */}
            <section id="conclusion" className="impact-section final-conclusion">
                <div className="impact-content">
                    <div className="section-header">
                        <h2>Conclusión y Proyecciones</h2>
                    </div>
                    <p className="impact-text">
                        La entrega del prototipo V4.0 marca la culminación de un ciclo de desarrollo riguroso. Hemos demostrado la capacidad de convertir un diseño conceptual en un producto físico funcional, resolviendo iterativamente los desafíos inherentes a la manufactura aditiva. El modelo final está listo para la validación de mercado y el escalamiento a una producción en lotes.
                    </p>
                    <a href="#" className="btn primary conclusion-cta">
                        Contactar para Producción Piloto
                    </a>
                </div>
            </section>
        </div>
    );
}