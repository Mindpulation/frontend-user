import s from '../styles/component/Loading.module.css'

const Loading = () => {
  return(
    <div className={s.wrap}>
      <div className={s.lds}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>      
    </div>
  );
}

export default Loading;