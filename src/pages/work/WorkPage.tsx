import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./WorkPage.scss";
import { Tab, Tabs } from "react-bootstrap";
import CheckboxList from "../../components/checkbox-list/CheckboxList";
import { useQuery } from "@tanstack/react-query";
import { getCountriesList } from "../../apis/countries-api";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function WorkPage() {
  const [countriesList, setCountriesList] = useState([]);

  const {
    data: countriesListData,
    error,
    isError,
    isLoading,
    isFetching,
    isSuccess,
  } = useQuery({
    queryKey: ["countriesList"],
    queryFn: getCountriesList,
  });

  useEffect(() => {
    toast("hello");
    if (countriesListData && isSuccess) {
      setCountriesList(countriesListData.data);
    }
    if (isError && error) {
      toast("error");
    }
  }, [isSuccess]);

  // const items = [
  //   {
  //     id: "1",
  //     value: "1",
  //   },
  //   {
  //     id: "2",
  //     value: "2",
  //   },
  //   {
  //     id: "3",
  //     value: "3",
  //   },
  // ];

  return (
    <>
      <div className="work-page fade-in-page">
        <Container>
          <ToastContainer />
          <Row>
            <Tabs
              defaultActiveKey="profile"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="home" title="Checkbox List">
                {/* <CheckboxList items={items} /> */}
                {countriesList.length > 0
                  ? countriesList.map((country: any) => (
                      <li>{country.name.common}</li>
                    ))
                  : ""}
              </Tab>
              <Tab eventKey="profile" title="Profile">
                Tab content for Profile
              </Tab>
              <Tab eventKey="longer-tab" title="Loooonger Tab">
                Tab content for Loooonger Tab
              </Tab>
            </Tabs>
          </Row>
        </Container>
      </div>
    </>
  );
}
