import { ContactItem } from "components/ContactItem/ContactItem";
import { List } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectFilteredContacts } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { ProgressBar } from  'react-loader-spinner'

export const ContactList = () => {
  const { isLoading, error } = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  
  return (
    <>
      {isLoading ? <ProgressBar /> : <List>
        {filteredContacts.map(item => {
          return (
            <ContactItem key={item.id} item={item}></ContactItem>
          )
        })}
      </List>}
      {error && <p>{error}</p>}
    </>
  )
};
