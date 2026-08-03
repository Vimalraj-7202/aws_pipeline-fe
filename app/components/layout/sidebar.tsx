"use client";
import React from "react";
import { Box, Tooltip } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import {
  SpaceDashboardOutlined,
  SettingsOutlined,
  LogoutOutlined,
} from "@mui/icons-material";

const iconSize = 28;

const menuItems = [
  { label: "Dashboard", icon: <SpaceDashboardOutlined />, path: "/dashboard" },
  { label: "Settings", icon: <SettingsOutlined />, path: "/settings" },
];

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push("/auth/login");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        py: 2,
        height: "100%",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center", mt: 2 }}>
        {menuItems.map((item) => {
          const isActive = pathname.startsWith(item.path);
          return (
            <Tooltip title={item.label} placement="right" key={item.path}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                  cursor: "pointer",
                  color: isActive ? "#fbc02d" : "white",
                  "&:hover": { color: "#4fc3f7", bgcolor: "rgba(255,255,255,0.1)" },
                  transition: "0.2s",
                }}
                onClick={() => router.push(item.path)}
              >
                {React.cloneElement(item.icon, { sx: { fontSize: iconSize } })}
              </Box>
            </Tooltip>
          );
        })}
      </Box>

      <Tooltip title="Logout" placement="right">
        <Box
          sx={{
            width: 50,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            cursor: "pointer",
            color: "white",
            mb: 2,
            "&:hover": { color: "red", bgcolor: "rgba(255,0,0,0.1)" },
          }}
          onClick={handleLogout}
        >
          <LogoutOutlined sx={{ fontSize: iconSize }} />
        </Box>
      </Tooltip>
    </Box>
  );
};

export default Sidebar;
