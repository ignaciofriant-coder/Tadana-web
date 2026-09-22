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
      footer: { tagline: 'Yoga y masaje tradicional tailandés, con calma y cercanía.', rights: 'Todos los derechos reservados' },
      meta: {
        home: 'Tadana: clases de yoga Hatha presenciales y online, y masaje tradicional tailandés con Rocío. Reserva tu hora.',
        yoga: 'Hatha yoga en grupos pequeños, presencial y online en vivo por Google Meet. Clases en español e inglés con Rocío, instructora formada en India.',
        masaje: 'Masaje tailandés tradicional: estiramientos asistidos y acupresión, sin aceites y con ropa cómoda. Sesiones de 60 min a 2 horas, con formación en Chiang Mai.'
      },
      more: { yoga: 'Conocer las clases', masaje: 'Más sobre el masaje' },
      yogaPage: {
        title: 'Clases de Hatha yoga, presenciales y online',
        sub: 'Grupos pequeños, atención personalizada y una práctica que respeta tus tiempos. En español e inglés.',
        ctaBook: 'Reservar una clase',
        ctaSchedule: 'Ver horarios',
        whatTitle: 'Mucho más que ejercicio físico',
        what1: 'Yoga significa «unión»: un método para equilibrar y armonizar el cuerpo, la mente y las emociones. Es una ciencia de vida que ayuda a encontrar armonía en todos los niveles: físico, mental, emocional y espiritual.',
        what2: 'En el Hatha yoga trabajamos con posturas sostenidas durante varias respiraciones, sincronizando el movimiento con el aliento hasta llegar a un estado de meditación. Es una práctica de consciencia corporal, con respeto y autocuidado, que fortalece la energía vital y te invita a explorar tus límites.',
        howTitle: 'Cómo es una clase',
        howSub: 'Cada práctica recorre el mismo camino: del movimiento a la quietud.',
        step1t: 'Posturas',
        step1d: 'Posturas sostenidas durante varias respiraciones, adaptadas a tu experiencia y a lo que tu cuerpo necesita ese día.',
        step2t: 'Respiración',
        step2d: 'El movimiento se sincroniza con el aliento. Es lo que une el cuerpo con la mente y te trae al presente.',
        step3t: 'Quietud',
        step3d: 'La práctica te lleva hacia un estado de meditación, a la calma y a la tranquilidad.',
        whenTitle: 'Modalidades y horarios',
        presDetail: 'En grupo pequeño, con atención personalizada.',
        onlineDetail: 'Clases en directo, desde donde estés.',
        oneLabel: 'Sesiones 1 : 1',
        oneInfo: 'Presencial u online · a coordinar',
        oneDetail: 'Una práctica personalizada, adaptada a tu cuerpo y a tu momento.',
        priceNote: 'Hay clase suelta y packs. Escríbeme y te cuento los valores.',
        trainKicker: 'Formación',
        trainTitle: 'Formada en India',
        train1: 'Me formé como instructora en la escuela Pankaj Yogpeeth, en Varkala, India, y practico yoga hace más de 7 años.',
        train2: 'Valoro a las personas tal como son, sin juicios y sin expectativas, y eso es lo que intento transmitir en cada clase.',
        aboutLink: 'Conocer más sobre mí',
        faqTitle: 'Preguntas frecuentes',
        faq: [
          {
            q: '¿Necesito experiencia previa?',
            a: 'No. Las clases se adaptan a tu experiencia y a lo que necesitas ese día. Como los grupos son pequeños, puedo darte atención personalizada y proponerte variantes de cada postura.'
          },
          {
            q: '¿Qué tipo de yoga enseñas?',
            a: 'Hatha yoga: posturas sostenidas durante varias respiraciones, con el movimiento sincronizado con el aliento, que llevan hacia un estado de meditación.'
          },
          {
            q: '¿Cómo funcionan las clases online?',
            a: 'Son en vivo por Google Meet, los martes y viernes a las 7:00, así que puedes practicar desde donde estés.'
          },
          { q: '¿Las clases son en inglés?', a: 'Sí. Doy clases en español y en inglés.' },
          {
            q: '¿Das clases particulares?',
            a: 'Sí: sesiones 1 a 1, presenciales u online, adaptadas a tu cuerpo y a tu momento.'
          },
          {
            q: '¿Cuánto cuesta una clase?',
            a: 'Hay clase suelta y packs, tanto presenciales como online. Escríbeme por WhatsApp y te cuento los valores.'
          }
        ],
        endTitle: '¿Te gustaría probar una clase?',
        endBody: 'Escríbeme y coordinamos tu primera práctica, presencial u online.',
        cross: 'También doy masaje tradicional tailandés.',
        crossLink: 'Conocer el masaje thai'
      },
      masajePage: {
        title: 'Masaje thai tradicional',
        sub: 'Estiramientos asistidos y acupresión para soltar tensiones y volver a la calma. En español e inglés.',
        ctaBook: 'Reservar una sesión',
        ctaSessions: 'Ver duraciones',
        what1: 'El masaje tradicional tailandés, también llamado yoga massage, es una antigua técnica terapéutica asiática que mezcla sabidurías del yoga, el budismo y la acupuntura china, y que se enseñaba en los templos.',
        what2: 'Trabaja sobre las líneas energéticas del cuerpo, llamadas «sen», y busca restaurar el equilibrio físico y mental liberando tensiones. Con estiramientos asistidos hacia posturas de yoga y puntos de acupresión, deja una sensación de liviandad, relajación y tranquilidad mental.',
        howTitle: 'Cómo es una sesión',
        howSub: 'Con ropa cómoda, sobre una superficie acolchada en el suelo y sin aceites.',
        step1t: 'Conversamos',
        step1d: 'Antes de empezar hablamos de cómo llegas y de las zonas donde sientes tensión o molestias.',
        step2t: 'Estiramientos y acupresión',
        step2d: 'Estiramientos asistidos hacia posturas de yoga y presión sobre puntos de las líneas «sen», ajustada a cada persona.',
        step3t: 'Sonoterapia',
        step3d: 'Cada sesión termina con una breve sonoterapia, para integrar lo trabajado y volver con calma.',
        sessKicker: 'Sesiones',
        sessTitle: 'Elige el tiempo que necesitas',
        sessNote: 'La sesión completa dura 2 horas; también hago sesiones de 1 hora y de 1 hora y media. Hay packs de varias sesiones: escríbeme y te cuento los valores.',
        faqTitle: 'Preguntas frecuentes',
        faq: [
          {
            q: '¿Qué ropa tengo que llevar?',
            a: 'Ropa cómoda, que te permita moverte con libertad. El masaje se hace con ropa y sin aceites.'
          },
          {
            q: '¿En qué se diferencia de un masaje con aceites?',
            a: 'Se hace en el suelo, sobre una superficie acolchada, con ropa y sin aceites. En vez de deslizamientos, trabaja con estiramientos asistidos hacia posturas de yoga y presión sobre puntos de las líneas «sen».'
          },
          {
            q: '¿Es un masaje fuerte?',
            a: 'La presión se ajusta a cada persona, así que puede ser tan suave o tan profundo como necesites.'
          },
          {
            q: '¿Cuánto dura una sesión?',
            a: 'La sesión completa es de 2 horas. También hay sesiones de 60 minutos y de 1 hora y media.'
          },
          {
            q: 'Nunca me hice uno, ¿es para mí?',
            a: 'Sí. Varias de las reseñas son de personas que lo probaban por primera vez. Antes de empezar conversamos para ajustar la sesión a lo que necesitas.'
          },
          { q: '¿Atiendes en inglés?', a: 'Sí, las sesiones pueden ser en español o en inglés.' },
          {
            q: '¿Cuánto cuesta?',
            a: 'Depende de la duración, y hay packs de varias sesiones. Escríbeme por WhatsApp y te cuento los valores.'
          }
        ],
        endTitle: '¿Reservamos tu sesión?',
        endBody: 'Escríbeme por WhatsApp, cuéntame cómo llegas y buscamos el horario que te acomode.',
        cross: 'También doy clases de Hatha yoga.',
        crossLink: 'Conocer las clases'
      }
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
      footer: { tagline: 'Yoga and traditional Thai massage, given with calm and care.', rights: 'All rights reserved' },
      meta: {
        home: 'Tadana: Hatha yoga classes in person and online, and traditional Thai massage with Rocío. Book your session.',
        yoga: 'Hatha yoga in small groups, in person and live online on Google Meet. Classes in Spanish and English with Rocío, a teacher trained in India.',
        masaje: 'Traditional Thai massage: assisted stretches and acupressure, without oils and in comfortable clothing. Sessions from 60 min to 2 hours, trained in Chiang Mai.'
      },
      more: { yoga: 'Discover the classes', masaje: 'More about Thai massage' },
      yogaPage: {
        title: 'Hatha yoga classes, in person and online',
        sub: 'Small groups, personal attention and a practice that respects your pace. In Spanish and English.',
        ctaBook: 'Book a class',
        ctaSchedule: 'See the schedule',
        whatTitle: 'Much more than exercise',
        what1: 'Yoga means «union»: a method to balance and harmonize body, mind and emotions. It is a science of life that helps you find harmony on every level: physical, mental, emotional and spiritual.',
        what2: 'In Hatha yoga we work with postures held for several breaths, syncing movement with the breath until we reach a meditative state. It is a practice of body awareness, with respect and self-care, that strengthens your vital energy and invites you to explore your limits.',
        howTitle: 'What a class is like',
        howSub: 'Every practice follows the same path: from movement to stillness.',
        step1t: 'Postures',
        step1d: 'Postures held for several breaths, adapted to your experience and to what your body needs that day.',
        step2t: 'Breath',
        step2d: 'Movement is synced with the breath. It is what joins body and mind and brings you into the present.',
        step3t: 'Stillness',
        step3d: 'The practice leads you towards a meditative state, into calm and quiet.',
        whenTitle: 'Formats and schedule',
        presDetail: 'In a small group, with personal attention.',
        onlineDetail: 'Live classes, from wherever you are.',
        oneLabel: 'One-to-one',
        oneInfo: 'In person or online · by arrangement',
        oneDetail: 'A personalized practice, adapted to your body and your moment.',
        priceNote: 'There are drop-in classes and class packs. Message me and I’ll share the prices.',
        trainKicker: 'Training',
        trainTitle: 'Trained in India',
        train1: 'I trained as a teacher at the Pankaj Yogpeeth school in Varkala, India, and I have been practising yoga for over 7 years.',
        train2: 'I value people exactly as they are, without judgement and without expectations, and that is what I try to bring to every class.',
        aboutLink: 'More about me',
        faqTitle: 'Frequently asked questions',
        faq: [
          {
            q: 'Do I need previous experience?',
            a: 'No. Classes adapt to your experience and to what you need that day. Groups are small, so I can give you personal attention and offer variations of each posture.'
          },
          {
            q: 'What style of yoga do you teach?',
            a: 'Hatha yoga: postures held for several breaths, with movement synced to the breath, leading towards a meditative state.'
          },
          {
            q: 'How do the online classes work?',
            a: 'They are live on Google Meet, on Tuesdays and Fridays at 7:00 am, so you can practise from wherever you are.'
          },
          { q: 'Are classes in English?', a: 'Yes. I teach in Spanish and in English.' },
          {
            q: 'Do you offer private classes?',
            a: 'Yes: one-to-one sessions, in person or online, adapted to your body and your moment.'
          },
          {
            q: 'How much does a class cost?',
            a: 'There are drop-in classes and packs, both in person and online. Message me on WhatsApp and I’ll share the prices.'
          }
        ],
        endTitle: 'Would you like to try a class?',
        endBody: 'Message me and we’ll arrange your first practice, in person or online.',
        cross: 'I also offer traditional Thai massage.',
        crossLink: 'Discover Thai massage'
      },
      masajePage: {
        title: 'Traditional Thai massage',
        sub: 'Assisted stretches and acupressure to release tension and return to calm. In Spanish and English.',
        ctaBook: 'Book a session',
        ctaSessions: 'See session lengths',
        what1: 'Traditional Thai massage, also known as yoga massage, is an ancient Asian therapeutic technique blending the wisdom of yoga, Buddhism and Chinese acupuncture, once taught in the temples.',
        what2: 'It works on the body’s energy lines, called «sen», and seeks to restore physical and mental balance by releasing tension. Through assisted stretches into yoga postures and acupressure points, it leaves a feeling of lightness, relaxation and mental calm.',
        howTitle: 'What a session is like',
        howSub: 'In comfortable clothing, on a padded surface on the floor and without oils.',
        step1t: 'We talk',
        step1d: 'Before we begin, we talk about how you are arriving and where you feel tension or discomfort.',
        step2t: 'Stretches and acupressure',
        step2d: 'Assisted stretches into yoga postures and pressure on points along the «sen» lines, adjusted to each person.',
        step3t: 'Sound therapy',
        step3d: 'Every session ends with a short sound therapy, to integrate the work and come back calmly.',
        sessKicker: 'Sessions',
        sessTitle: 'Choose the time you need',
        sessNote: 'The full session lasts 2 hours; I also offer 1-hour and 1.5-hour sessions. There are multi-session packs: message me and I’ll share the prices.',
        faqTitle: 'Frequently asked questions',
        faq: [
          {
            q: 'What should I wear?',
            a: 'Comfortable clothing that lets you move freely. The massage is done clothed and without oils.'
          },
          {
            q: 'How is it different from an oil massage?',
            a: 'It is done on the floor, on a padded surface, clothed and without oils. Instead of gliding strokes, it works with assisted stretches into yoga postures and pressure on points along the «sen» lines.'
          },
          {
            q: 'Is it a strong massage?',
            a: 'The pressure is adjusted to each person, so it can be as gentle or as deep as you need.'
          },
          {
            q: 'How long is a session?',
            a: 'The full session is 2 hours. There are also 60-minute and 1.5-hour sessions.'
          },
          {
            q: 'I’ve never had one — is it for me?',
            a: 'Yes. Several of the reviews are from people trying it for the first time. Before we begin, we talk so the session fits what you need.'
          },
          { q: 'Do you work in English?', a: 'Yes, sessions can be in Spanish or in English.' },
          {
            q: 'How much does it cost?',
            a: 'It depends on the length, and there are multi-session packs. Message me on WhatsApp and I’ll share the prices.'
          }
        ],
        endTitle: 'Shall we book your session?',
        endBody: 'Message me on WhatsApp, tell me how you’re feeling and we’ll find a time that works for you.',
        cross: 'I also teach Hatha yoga classes.',
        crossLink: 'Discover the classes'
      }
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
