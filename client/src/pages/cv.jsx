import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileDownload} from '@fortawesome/free-solid-svg-icons';

import {PDFViewer} from '@react-pdf/renderer';

import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import BoxButton from "../components/boxbutton";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

function CV(){
  const [numPages, setNumPages] = useState(null);


  // Callback when the document is successfully loaded
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
      <NavBar />
      <div className="CV">
        <div className="vContainerCentered">
          <div>
            <BoxButton>
              <a href="/resume.pdf" download>
                Download Resume <FontAwesomeIcon icon={faFileDownload} />
              </a>
            </BoxButton>
          </div>
          <iframe
            src="/resume.pdf"
            width="700"
            height="800"
            style={{border:"none"}}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CV;