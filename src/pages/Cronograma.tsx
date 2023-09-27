import React, { useState, ChangeEvent } from "react";
import { Tab, Tabs, Box, Typography, Dialog, Card, CardContent } from "@mui/material";

import PalestraDia1 from "../assets/cronograma/dia1Palestra.jpg";
import TutorialDia1 from "../assets/cronograma/Dia1Tutoriais.jpg";

import PalestraDia2 from "../assets/cronograma/palestradia2.jpg";
import TutorialDia2 from "../assets/cronograma/tutoriaisdia2.jpg";


export function Cronograma() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="my-8">
        <h2 className="text-4xl font-bold">Cronograma</h2>
        <div className="my-4">
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab label="DIA 1 (29 de Setembro - Sexta)" style={{ color: 'white' }} />
              <Tab label="DIA 2 (30 de Setembro - Sábado)" style={{ color: 'white' }} />
            </Tabs>
             {/* Palestra dia 1 */}
            <TabPanel value={value} index={0}>
              <img src={PalestraDia1} alt="Dia 1" onClick={() => handleImageClick(PalestraDia1)} style={{ cursor: 'pointer' }} />
            </TabPanel>
              {/* Tutorial dia 1 */}
            <TabPanel value={value} index={0}>
              <img src={TutorialDia1} alt="Dia 1" onClick={() => handleImageClick(TutorialDia1)} style={{ cursor: 'pointer' }} />
            </TabPanel>
              {/* Palestra dia 2 */}
            <TabPanel value={value} index={1}>
              <img src={PalestraDia2} alt="Dia 2" onClick={() => handleImageClick(PalestraDia2)} style={{ cursor: 'pointer' }} />
            </TabPanel>
                {/* Tutorial dia 2 */}
            <TabPanel value={value} index={1}>
              <img src={TutorialDia2} alt="Dia 2" onClick={() => handleImageClick(TutorialDia2)} style={{ cursor: 'pointer' }} />
            </TabPanel>
          </Box>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </Dialog>
    </div>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
