import React from 'react';
import { Box, Typography, Link, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <Box
      ref={ref}
      component="footer"
      sx={{
        backgroundColor: '#1D773A',
        color: '#FFFFFF',
        padding: '40px 20px',
      }}
    >
      {/* Top Tier: VuMeds Logo and Search Bar */}
      <motion.div variants={slideUpVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
        <Box display="flex" alignItems="center" mb={3}>
          <Typography variant="h5" fontWeight="bold" mr={2}>VuMeds</Typography>
          <Box display="flex" alignItems="center" bgcolor="white" borderRadius="4px" px={1}>
            <InputBase
              placeholder="Search medicines by name, salt, or brand..."
              sx={{ ml: 1, flex: 1 }}
            />
            <IconButton type="submit" sx={{ p: '10px' }}>
              <SearchIcon color="primary" />
            </IconButton>
          </Box>
        </Box>
      </motion.div>

      {/* Middle Tier: Quick Links, Contact Info, Social Media */}
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {/* Quick Links */}
        <motion.div variants={slideUpVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <Typography variant="h6" mb={2}>Quick Links</Typography>
          <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>Contact Us</Link>
          <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>Privacy Policy</Link>
          <Link href="#" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>Terms & Conditions</Link>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={slideUpVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <Typography variant="h6" mb={2}>Contact Info</Typography>
          <Typography>Address: 123 Varanasi Road, Varanasi, UP, India</Typography>
          <Typography>Phone: +91-9876543210</Typography>
        </motion.div>

        {/* Social Media Links */}
        <motion.div variants={slideUpVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <Typography variant="h6" mb={2}>Follow Us</Typography>
          <Box display="flex" gap={2}>
            <IconButton href="https://facebook.com" target="_blank">
              <FacebookIcon fontSize="large" sx={{ color: '#FFFFFF' }} />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank">
              <TwitterIcon fontSize="large" sx={{ color: '#FFFFFF' }} />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank">
              <InstagramIcon fontSize="large" sx={{ color: '#FFFFFF' }} />
            </IconButton>
          </Box>
        </motion.div>
      </Box>

      {/* Bottom Tier: Legal Information */}
      <Box textAlign="center" mt={3}>
        <Typography variant="body2">© 2024 VuMeds. All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
