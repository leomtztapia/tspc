'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xpzgwqwg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'Nuevo mensaje de The Secret Pizza Club'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contacto</h2>
        <p className={styles.subtitle}>
          ¿Tienes alguna pregunta o quieres cotizar un evento? ¡Escríbenos!
        </p>
        
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3>Información de Contacto</h3>
            <div className={styles.infoItem}>
              <span className={styles.icon}>📞</span>
              <div>
                <h4>Teléfono</h4>
                <p>+52 614 127 3468</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <span className={styles.icon}>📧</span>
              <div>
                <h4>Email</h4>
                <p>tspcmx@gmail.com</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <span className={styles.icon}>📍</span>
              <div>
                <h4>Ubicación</h4>
                <p>Chihuahua, México</p>
              </div>
            </div>
          </div>
          
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nombre *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={styles.textarea}
                  placeholder="Cuéntanos sobre tu evento o pregunta..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary ${styles.submitButton}`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
              
              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  ¡Mensaje enviado exitosamente! Te responderemos pronto.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className={styles.errorMessage}>
                  Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 