import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { adminPlaylistService } from '../services/adminApi';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import toast from 'react-hot-toast';

const PlaylistManagement: React.FC = () => {
  const [playlists, setPlaylists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const fetchPlaylists = async () => {
    try {
      const response = await adminPlaylistService.getAllPlaylists({ limit: 50 });
      setPlaylists(response.data.songs || []);
    } catch (error) {
      console.error('Error fetching playlists:', error);
      toast.error('Failed to fetch playlists');
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePlaylist = async (id: string) => {
    try {
      await adminPlaylistService.deletePlaylist(id);
      setPlaylists(playlists.filter((p) => p._id !== id));
      toast.success('Playlist deleted');
    } catch (error) {
      toast.error('Failed to delete playlist');
    }
  };

  const handleAutoGenerate = async () => {
    try {
      await adminPlaylistService.autoGeneratePlaylists({ type: 'mood', count: 5 });
      toast.success('Playlists generated successfully!');
      fetchPlaylists();
    } catch (error) {
      toast.error('Failed to generate playlists');
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Playlist Management</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAutoGenerate}
        >
          Auto Generate
        </Button>
      </Box>

      <Card>
        <CardContent>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                    <TableCell>Name</TableCell>
                    <TableCell>Owner</TableCell>
                    <TableCell>Songs</TableCell>
                    <TableCell>Public</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {playlists.map((playlist: any) => (
                    <TableRow key={playlist._id}>
                      <TableCell>{playlist.name}</TableCell>
                      <TableCell>{playlist.owner?.username}</TableCell>
                      <TableCell>{playlist.songs?.length || 0}</TableCell>
                      <TableCell>{playlist.isPublic ? 'Yes' : 'No'}</TableCell>
                      <TableCell>
                        <Button
                          size="small"
                          color="error"
                          startIcon={<DeleteIcon />}
                          onClick={() => handleDeletePlaylist(playlist._id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default PlaylistManagement;
