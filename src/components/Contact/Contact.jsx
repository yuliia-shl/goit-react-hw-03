import s from './Contact.module.css';
import { BiSolidUser } from 'react-icons/bi';
import { FaPhoneAlt } from 'react-icons/fa';

const Contacts = ({ id, name, number, handleDeleteContact }) => {
  return (
    <>
      {/* <div className={s.container}> */}
      <div className={s.wrapper}>
        <div className={s.svgWrap}>
          <BiSolidUser />
          <p className={s.name}>{name}</p>
        </div>
        <div className={s.svgWrap}>
          <FaPhoneAlt />
          <p className={s.phone}>{number}</p>
        </div>
      </div>
      <button onClick={() => handleDeleteContact(id)} className={s.btn}>
        Delete
      </button>
    </>
  );
};

export default Contacts;
