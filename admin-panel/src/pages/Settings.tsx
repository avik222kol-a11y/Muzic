import React from 'react';
import { Box, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

const Settings: React.FC = () => {
  const [settings, setSettings] = React.useState({
    siteName: 'Muzic',
    siteEmail: 'support@muzic.com',
    maintenanceMode: false,
  });

  const handleChange = (field: string, value: any) => {
    setSettings({ ...settings, [field]: value });
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>Settings</Typography>
      <Card>
        <CardContent>
          <TextField
            fullWidth
            label="Site Name"
            margin="normal"
            value={settings.siteName}
            onChange={(e) => handleChange('siteName', e.target.value)}
          />
          <TextField
            fullWidth
            label="Support Email"
            margin="normal"
            type="email"
            value={settings.siteEmail}
            onChange={(e) => handleChange('siteEmail', e.target.value)}
          />
          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={handleSave}
            >
              Save Settings
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Settings;
