
const Contact = () => {
  return <section>
    <div className='px-4 mx-auto max-w-screen-md'>
      <h2 className='heading text-center'>
        Contactenos
      </h2>
      <p className='mb-8 lg:mb-16 font-light text-center text__para'>
        ¿Tienes algun comentario? Dejanos saber :)
      </p>
      <form action="#" className='space-y-8'>
        <div>
          <label htmlFor="email" className='form__label'>Correo Electronico</label>
          <input type="email" name="" id="email" placeholder='example@gmail.com'
          className='form__input mt-1' />
        </div>
        <div>
          <label htmlFor="subject" className='form__label'>Sujeto</label>
          <input type="text" name="" id="subject" placeholder='Nombre Completo'
          className='form__input mt-1' />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className='form__label'>Tu mensaje</label>
          <textarea type="text" name="" id="message" placeholder='Deja tu comentario'
          className='form__input mt-1' rows={6} />
        </div>
        <button type="submit" className="btn rounded sm:W-fit">Publicar</button>
      </form>
    </div>
  </section>
}

export default Contact