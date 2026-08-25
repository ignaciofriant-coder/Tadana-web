/* ============================================================
   Tadana · main.js
   Idioma (ES/EN), header, menú móvil, parallax del hero y
   envío del formulario por WhatsApp.
   ============================================================ */
(function () {
  'use strict';

  var WHATSAPP = '56934427797';

  /* ---------------------------------------------------------
     Textos
     --------------------------------------------------------- */
  var DICT = {
    es: {
      nav: { inicio: 'Inicio', yoga: 'Yoga', masaje: 'Masaje Thai', resenas: 'Reseñas', sobre: 'Sobre mí', contacto: 'Contacto', reserva: 'Reserva tu hora' },
      hero: {
        title: 'Un espacio para respirar y volver a tu cuerpo',
        sub: 'Yoga y Masaje Thai en un espacio tranquilo, con calma, atención y cercanía.',
        cta1: 'Yoga', cta2: 'Masaje thai'
      },
      intro: {
        lead: 'Tadana es un espacio de yoga y masaje thai para respirar, soltar y volver a tu cuerpo.',
        p1: 'Clases de Hatha yoga en grupos pequeños, presenciales y online, en español e inglés; y sesiones de masaje tradicional tailandés con atención, calma y cercanía.'
      },
      serv: { note: 'Certificada en India y en Chiang Mai, Tailandia.' },
      four: {
        title: 'Cómo acompaño tu práctica',
        sub: 'Cuatro formas de encontrarnos, adaptadas a tu experiencia y a lo que necesitas hoy.',
        t1: 'Yoga presencial', d1: 'Hatha yoga en grupos pequeños, con atención personalizada. Miércoles 18:30 hrs.',
        t2: 'Yoga online', d2: 'Clases en vivo por Google Meet, desde donde estés. Martes y viernes 7:00 hrs.',
        t3: 'Masaje thai', d3: 'Estiramientos asistidos y acupresión sobre las líneas «sen». Sesiones de 60 min a 2 hrs.',
        t4: 'Sesiones 1 : 1', d4: 'Práctica personalizada, presencial u online, adaptada a tu cuerpo y a tu momento.'
      },
      yoga: {
        kicker: 'Yoga Hatha',
        title: 'Yoga que se siente amable',
        body: 'Yoga significa «unión»: un método para equilibrar y armonizar el cuerpo, la mente y las emociones. Trabajamos con posturas sostenidas por varias respiraciones, hasta llegar a un estado de meditación, con respeto y autocuidado, explorando nuestros límites.',
        benefTitle: 'Beneficios',
        beneficios: ['Mejora la flexibilidad', 'Mejora la movilidad articular', 'Fortalece el cuerpo de manera integral', 'Reduce el estrés', 'Mayor conexión cuerpo y mente', 'Claridad mental', 'Aumenta la energía'],
        presLabel: 'Presencial', presInfo: 'Miércoles 18:30 hrs',
        onlineLabel: 'Online en vivo', onlineInfo: 'Martes y viernes 7:00 hrs · Google Meet',
        groups: 'Grupos pequeños, con atención personalizada. Clases en español e inglés.',
        credential: 'Instructora de yoga · Escuela Pankaj Yogpeeth, Varkala, India',
        cta: 'Consultar precios de yoga'
      },
      masaje: {
        kicker: 'Masaje tradicional tailandés',
        title: '¿Conoces el masaje thai?',
        body: 'Una antigua técnica terapéutica asiática que mezcla sabidurías del yoga, el budismo y la acupuntura china, y que se enseñaba en los templos. Trabaja sobre las líneas energéticas del cuerpo, llamadas «sen», mediante estiramientos asistidos hacia posturas de yoga y puntos de acupresión.',
        beneficios: ['Relajación corporal y tranquilidad mental', 'Mejora la circulación y los centros linfáticos', 'Trabaja la flexibilidad muscular y la movilidad articular', 'Reduce el estrés', 'Mejora la postura'],
        dur1: '60 min', dur2: '1.30 hrs', dur3: '2 hrs · sesión completa',
        detail: 'Se realiza con ropa cómoda, sobre una superficie acolchada en el suelo y sin aceites. Cada sesión termina con una breve sonoterapia.',
        credential: 'Certificación · Sunshine Massage School, Chiang Mai, Tailandia',
        cta: 'Consultar precios de masaje'
      },
      rev: {
        count: '17 reseñas en Google',
        title: 'Lo que dicen quienes ya vinieron',
        items: [
          { quote: 'Rocío me hizo sentir cómoda desde el primer momento. Tiene muy buena comunicación, transmite confianza y controla perfectamente la presión.', author: 'Adriana M.' },
          { quote: 'La recomiendo 100%, es una experiencia no solo física sino también espiritual y emocional.', author: 'Paulina L.' },
          { quote: 'Calma, atención y sensibilidad… 60 minutos después estaba profundamente relajado.', author: 'Mark B.' }
        ],
        cta: 'Ver todas en Google'
      },
      about: {
        kicker: 'Un poco sobre mí', title: 'Hola, soy Rocío',
        p1: 'Mujer viajera, estudiante de psicología y practicante de yoga desde hace más de 7 años, amante y cuidadora de la naturaleza y de los deportes al aire libre. En mi camino como migrante viví en España y cinco años en Australia, y viajé por Asia haciendo voluntariados durante un año. Trabajé como acompañante terapéutica, en salud mental y en zonas vulnerables.',
        p2: 'Valoro a las personas tal cual y como son, sin juicios y sin expectativas, y eso mismo trato de transmitir en mis terapias. Con respeto, paciencia, humildad y amor, podremos crecer todos juntos hacia un lugar mejor.',
        certYoga: 'Formación de instructora · Pankaj Yogpeeth, Varkala, India',
        certAsia: 'Un año de práctica y voluntariados por Asia'
      },
      contact: {
        title: 'Contáctame',
        body: 'Cuéntame qué necesitas y coordinamos tu hora. Respondo por WhatsApp, Instagram o el formulario.',
        formLead: 'Completa el formulario y te contacto.',
        details: 'Contacto', follow: 'Síguenos en redes',
        followBody: 'Publico horarios, avisos de clases y novedades en Instagram. Escríbeme por ahí o por WhatsApp cuando quieras.',
        tool: 'Herramientas para acompañarte',
        optYoga: 'Yoga', optThai: 'Masaje Tailandés', optBoth: 'Yoga y masaje', optOther: 'Otra consulta',
        name: 'Nombre', emailPh: 'Email (opcional)', msg: 'Mensaje',
        send: 'Enviar por WhatsApp',
        formHint: 'Se abre WhatsApp con tu mensaje ya escrito. Solo tienes que darle enviar.',
        hours: 'Lunes a sábado · 10:00–20:00',
        errName: 'Escribe tu nombre.',
        errMsg: 'Cuéntame brevemente qué necesitas.',
        waIntro: 'Hola Rocío, soy',
        waInterest: 'Me interesa'
      },
      footer: { tagline: 'Yoga y masaje tradicional tailandés, con calma y cercanía.', rights: 'Todos los derechos reservados' }
    },

    en: {
      nav: { inicio: 'Home', yoga: 'Yoga', masaje: 'Thai Massage', resenas: 'Reviews', sobre: 'About me', contacto: 'Contact', reserva: 'Book your session' },
      hero: {
        title: 'A space to breathe and come back to your body',
        sub: 'Yoga and Thai massage in a quiet space — calm, attentive and close.',
        cta1: 'Yoga', cta2: 'Thai massage'
      },
      intro: {
        lead: 'Tadana is a yoga and Thai massage space — a place to breathe, let go and come back to your body.',
        p1: 'Hatha yoga classes in small groups, in person and online, in Spanish and English; and traditional Thai massage sessions given with care, calm and closeness.'
      },
      serv: { note: 'Certified in India and in Chiang Mai, Thailand.' },
      four: {
        title: 'How I support your practice',
        sub: 'Four ways to meet, shaped around your experience and what you need today.',
        t1: 'Yoga in person', d1: 'Hatha yoga in small groups, with personalized attention. Wednesdays 6:30 pm.',
        t2: 'Yoga online', d2: 'Live classes on Google Meet, from wherever you are. Tuesdays and Fridays 7:00 am.',
        t3: 'Thai massage', d3: 'Assisted stretches and acupressure along the «sen» lines. Sessions from 60 min to 2 hrs.',
        t4: 'One-to-one', d4: 'A personalized practice, in person or online, adapted to your body and your moment.'
      },
      yoga: {
        kicker: 'Hatha Yoga',
        title: 'Yoga that feels kind',
        body: 'Yoga means «union»: a method to balance and harmonize body, mind and emotions. We work with postures held for several breaths, reaching a meditative state, with respect and self-care, exploring our limits.',
        benefTitle: 'Benefits',
        beneficios: ['Improves flexibility', 'Improves joint mobility', 'Strengthens the whole body', 'Reduces stress', 'Deeper body–mind connection', 'Mental clarity', 'Boosts energy'],
        presLabel: 'In person', presInfo: 'Wednesdays 6:30 pm',
        onlineLabel: 'Live online', onlineInfo: 'Tuesdays and Fridays 7:00 am · Google Meet',
        groups: 'Small groups, with personalized attention. Classes in Spanish and English.',
        credential: 'Yoga instructor · Pankaj Yogpeeth School, Varkala, India',
        cta: 'Ask about yoga pricing'
      },
      masaje: {
        kicker: 'Traditional Thai massage',
        title: 'Have you tried Thai massage?',
        body: 'An ancient Asian therapeutic technique blending the wisdom of yoga, Buddhism and Chinese acupuncture, once taught in the temples. It works on the body’s energy lines, called «sen», through assisted stretches into yoga-like postures and acupressure points.',
        beneficios: ['Physical relaxation and mental calm', 'Improves circulation and lymphatic centres', 'Works on muscular flexibility and joint mobility', 'Reduces stress', 'Improves posture'],
        dur1: '60 min', dur2: '1.30 hrs', dur3: '2 hrs · full session',
        detail: 'It is done in comfortable clothing, on a padded surface on the floor and without oils. Every session closes with a short sound therapy.',
        credential: 'Certified · Sunshine Massage School, Chiang Mai, Thailand',
        cta: 'Ask about massage pricing'
      },
      rev: {
        count: '17 reviews on Google',
        title: 'What people who visited say',
        items: [
          { quote: 'Rocío made me feel comfortable from the very first moment. She communicates wonderfully, inspires trust and controls the pressure perfectly.', author: 'Adriana M.' },
          { quote: 'I recommend her 100%, it is an experience that is not only physical but also spiritual and emotional.', author: 'Paulina L.' },
          { quote: 'Calm, care and sensitivity… 60 minutes later I was deeply relaxed.', author: 'Mark B.' }
        ],
        cta: 'See all on Google'
      },
      about: {
        kicker: 'A little about me', title: 'Hi, I’m Rocío',
        p1: 'A traveling woman, psychology student and yoga practitioner for over 7 years, a lover and carer of nature and outdoor sports. On my path as a migrant I lived in Spain and five years in Australia, and travelled through Asia volunteering for a year. I worked as a therapeutic companion, in mental health and in vulnerable areas.',
        p2: 'I value people exactly as they are, without judgement and without expectations, and that is what I try to convey in my therapies. With respect, patience, humility and love, we can all grow together towards a better place.',
        certYoga: 'Teacher training · Pankaj Yogpeeth, Varkala, India',
        certAsia: 'A year of practice and volunteering across Asia'
      },
      contact: {
        title: 'Get in touch',
        body: 'Tell me what you need and we’ll arrange your time. I reply via WhatsApp, Instagram or the form.',
        formLead: 'Fill in the form and I’ll get back to you.',
        details: 'Contact', follow: 'Follow us',
        followBody: 'I post schedules, class updates and news on Instagram. Write to me there or on WhatsApp any time.',
        tool: 'What are you looking for?',
        optYoga: 'Yoga', optThai: 'Thai massage', optBoth: 'Yoga and massage', optOther: 'Something else',
        name: 'Name', emailPh: 'Email (optional)', msg: 'Message',
        send: 'Send via WhatsApp',
        formHint: 'WhatsApp opens with your message already written. You only have to hit send.',
        hours: 'Monday to Saturday · 10:00–20:00',
        errName: 'Please write your name.',
        errMsg: 'Tell me briefly what you need.',
        waIntro: 'Hi Rocío, I’m',
        waInterest: 'I’m interested in'
      },
      footer: { tagline: 'Yoga and traditional Thai massage, given with calm and care.', rights: 'All rights reserved' }
    }
  };

  /* ---------------------------------------------------------
     Utilidades
     --------------------------------------------------------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  function resolve(obj, path) {
    return path.split('.').reduce(function (acc, key) {
      return acc == null ? undefined : acc[key];
    }, obj);
  }

  /* ---------------------------------------------------------
     Idioma
     --------------------------------------------------------- */
  var lang = 'es';
  try { lang = localStorage.getItem('tadana-lang') || 'es'; } catch (e) { /* modo privado */ }
  if (!DICT[lang]) { lang = 'es'; }

  function t(path) {
    var v = resolve(DICT[lang], path);
    return v == null ? resolve(DICT.es, path) : v;
  }

  function applyLang() {
    document.documentElement.lang = lang;

    $$('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (typeof v === 'string') { el.textContent = v; }
    });

    $$('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var bits = pair.split(':');
        if (bits.length !== 2) { return; }
        var v = t(bits[1].trim());
        if (typeof v === 'string') { el.setAttribute(bits[0].trim(), v); }
      });
    });

    $$('.lang__btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    var desc = lang === 'en'
      ? 'Tadana: Hatha yoga classes in person and online, and traditional Thai massage with Rocío. Book your session.'
      : 'Tadana: clases de yoga Hatha presenciales y online, y masaje tradicional tailandés con Rocío. Reserva tu hora.';
    var meta = $('meta[name="description"]');
    if (meta) { meta.setAttribute('content', desc); }
  }

  function setLang(next) {
    if (!DICT[next] || next === lang) { return; }
    lang = next;
    try { localStorage.setItem('tadana-lang', lang); } catch (e) { /* ignorar */ }
    applyLang();
  }

  $$('.lang__btn').forEach(function (btn) {
    btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang')); });
  });

  applyLang();

  /* ---------------------------------------------------------
     Menú móvil
     --------------------------------------------------------- */
  var burger = $('#burger');
  var menu = $('#menu');

  function closeMenu() {
    if (!menu) { return; }
    menu.hidden = true;
    if (burger) { burger.setAttribute('aria-expanded', 'false'); }
  }

  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.hidden;
      menu.hidden = !open;
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    $$('a', menu).forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeMenu(); }
    });
  }

  /* ---------------------------------------------------------
     Header + parallax del hero
     --------------------------------------------------------- */
  var header = $('#header');
  var heroImg = $('#heroImg');
  var heroContent = $('#heroContent');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ticking = false;

  function onFrame() {
    ticking = false;
    var vh = window.innerHeight || 1;
    var y = window.pageYOffset || 0;
    var p = Math.min(1, Math.max(0, y / vh));

    if (header) { header.classList.toggle('is-scrolled', y > 56); }
    if (reduceMotion) { return; }

    if (heroImg) {
      // En móvil la imagen mide exactamente el alto del hero: no hay sobrante
      // que desplazar, y moverla dejaría ver el borde.
      heroImg.style.transform = window.innerWidth > 600
        ? 'translate3d(0,' + (p * vh * 0.12).toFixed(1) + 'px,0) scale(' + (1 + p * 0.05).toFixed(4) + ')'
        : '';
    }
    if (heroContent) {
      if (p > 0.001) {
        heroContent.style.animation = 'none';
        heroContent.style.opacity = String(Math.max(0, 1 - p * 1.4));
        heroContent.style.transform = 'translate3d(0,' + (p * -48).toFixed(1) + 'px,0)';
      } else {
        heroContent.style.opacity = '';
        heroContent.style.transform = '';
      }
    }
  }

  function onScroll() {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onFrame); }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onFrame();

  /* ---------------------------------------------------------
     Formulario → WhatsApp
     --------------------------------------------------------- */
  var form = $('#contactForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nombre = form.nombre.value.trim();
      var email = form.email.value.trim();
      var servicio = form.servicio.value;
      var mensaje = form.mensaje.value.trim();

      if (!nombre) { form.nombre.focus(); alert(t('contact.errName')); return; }
      if (!mensaje) { form.mensaje.focus(); alert(t('contact.errMsg')); return; }

      var lines = [
        t('contact.waIntro') + ' ' + nombre + '.',
        t('contact.waInterest') + ': ' + servicio + '.',
        mensaje
      ];
      if (email) { lines.push('Email: ' + email); }

      window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
    });
  }

  /* ---------------------------------------------------------
     Año del footer
     --------------------------------------------------------- */
  var year = $('#year');
  if (year) { year.textContent = String(new Date().getFullYear()); }
})();
