"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {Box,Button,TextField,Typography,Dialog,DialogContent,InputAdornment,IconButton,Link as MuiLink,Divider,Alert} from "@mui/material";
import Google from "@mui/icons-material/Google";
import GitHub from "@mui/icons-material/GitHub";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import RocketLaunchRounded from "@mui/icons-material/RocketLaunchRounded";
import EmailRounded from "@mui/icons-material/EmailRounded";
import LockRounded from "@mui/icons-material/LockRounded";
import CircularProgress from "@mui/material/CircularProgress";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { keyframes } from "@emotion/react";
import ChatRounded from "@mui/icons-material/ChatRounded";
import CodeRounded from "@mui/icons-material/CodeRounded";
import GroupsRounded from "@mui/icons-material/GroupsRounded";
import SecurityRounded from "@mui/icons-material/SecurityRounded";
import IntegrationInstructionsRounded from "@mui/icons-material/IntegrationInstructionsRounded";
import ApiRounded from "@mui/icons-material/ApiRounded";
import TerminalRounded from "@mui/icons-material/TerminalRounded";
import WebhookRounded from "@mui/icons-material/WebhookRounded";
import InfoRounded from "@mui/icons-material/InfoRounded";

const DUMMY_EMAIL = "vimal@gmail.com";
const DUMMY_PASSWORD = "12345678";

const modalEnter = keyframes`from{opacity:0;transform:translateY(24px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}`;
const orbFloat1 = keyframes`0%,100%{transform:translate(0,0)}50%{transform:translate(-20px,15px)}`;
const orbFloat2 = keyframes`0%,100%{transform:translate(0,0)}50%{transform:translate(15px,-10px)}`;
const shimmer = keyframes`0%{background-position:200% 0}100%{background-position:-200% 0}`;
const logoPulse = keyframes`0%,100%{box-shadow:0 8px 32px rgba(88,101,242,0.4)}50%{box-shadow:0 12px 48px rgba(88,101,242,0.6)}`;
const shake = keyframes`0%{transform:translateX(-4px)}25%{transform:translateX(4px)}50%{transform:translateX(-2px)}75%{transform:translateX(2px)}100%{transform:translateX(0)}`;

const fadeUp = keyframes`from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}`;

export default function Login() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
      localStorage.setItem("token", "dummy-token");
      router.push("/dashboard");
    } else {
      setError("Login or password is invalid.");
      setLoading(false);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
const glassInputSx = {
    "& .MuiOutlinedInput-root": {
      bgcolor: "rgba(255,255,255,0.06)",
      backdropFilter: "blur(10px)",
      color: "#e0e0e8",
      borderRadius: "12px",
      transition: "all 0.25s",
      "& fieldset": { borderColor: "rgba(255,255,255,0.1)", transition: "all 0.25s" },
      "&:hover": { bgcolor: "rgba(255,255,255,0.09)", "& fieldset": { borderColor: "rgba(124,106,239,0.4)" } },
      "&.Mui-focused": { bgcolor: "rgba(255,255,255,0.1)", "& fieldset": { borderColor: "#7c6aef", boxShadow: "0 0 0 3px rgba(124,106,239,0.15)" } },
    },
    "& .MuiOutlinedInput-input::placeholder": { color: "rgba(255,255,255,0.3)", opacity: 1 },
  };

  const sectionSx = {
    py: { xs: 4, md: 6 },
    px: { xs: 3, md: 8 },
    maxWidth: 1200,
    mx: "auto",
  };

  return (
    <Box sx={{ bgcolor: "#23272a", overflowX: "hidden" }}>
      {/* BG */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 0%, #3a1d8e 0%, #1a1147 40%, #0c0a2a 70%, #050318 100%)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          backgroundImage: `radial-gradient(2px 2px at 20px 30px,rgba(255,255,255,.3),transparent),radial-gradient(2px 2px at 40px 70px,rgba(255,255,255,.2),transparent),radial-gradient(1px 1px at 90px 40px,rgba(255,255,255,.4),transparent),radial-gradient(1px 1px at 130px 80px,rgba(255,255,255,.2),transparent),radial-gradient(2px 2px at 160px 30px,rgba(255,255,255,.3),transparent)`,
          backgroundSize: "200px 100px",
        }}
      />

      {/* Navbar */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backdropFilter: "blur(12px)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 3, md: 6 },
            py: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <RocketLaunchRounded sx={{ color: "#fff", fontSize: 28 }} />
            <Typography sx={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>
              deployX
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            {["features", "community", "developers", "about"].map((id) => (
              <Typography
                key={id}
                onClick={() => scrollTo(id)}
                sx={{
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 500,
                  cursor: "pointer",
                  textTransform: "capitalize",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {id}
              </Typography>
            ))}
          </Box>
          <Button
            onClick={() => setOpen(true)}
            sx={{
              bgcolor: "#fff",
              color: "#23272a",
              fontWeight: 600,
              fontSize: 14,
              textTransform: "none",
              borderRadius: "40px",
              px: 3,
              py: 0.8,
              "&:hover": { bgcolor: "#f0f0f0" },
            }}
          >
            Log In
          </Button>
        </Box>
      </Box>

      {/* Hero */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            ...sectionSx,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "flex-end",
            gap: { xs: 3, md: 5 },
            pt: { xs: 4, md: 6 },
            pb: 0,
          }}
        >
          <Box sx={{ flex: 1, maxWidth: 500 }}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: { xs: 32, md: 44 },
                fontWeight: 900,
                lineHeight: 1.1,
                textTransform: "uppercase",
                letterSpacing: -1,
                mb: 2,
              }}
            >
              Deploy Faster,{" "}
              <Box component="span" sx={{ color: "#7c6aef" }}>
                Ship
              </Box>{" "}
              Smarter
            </Typography>
            <Typography
              sx={{
                color: "#dcddde",
                fontSize: { xs: 14, md: 16 },
                lineHeight: 1.7,
                mb: 3,
                maxWidth: 440,
              }}
            >
              deployX is your all-in-one DevOps platform. Connect your GitHub repos, automate CI/CD pipelines, host your apps, and monitor deployments — all from one place.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                onClick={() => setOpen(true)}
                sx={{
                  bgcolor: "#fff",
                  color: "#23272a",
                  fontWeight: 600,
                  fontSize: 15,
                  textTransform: "none",
                  borderRadius: "40px",
                  px: 3,
                  py: 1,
                  "&:hover": { bgcolor: "#f0f0f0" },
                  transition: "all 0.2s",
                }}
              >
                Get Started
              </Button>
              <Button
                onClick={() => scrollTo("features")}
                variant="outlined"
                sx={{
                  color: "#fff",
                  borderColor: "#fff",
                  fontWeight: 600,
                  fontSize: 15,
                  textTransform: "none",
                  borderRadius: "40px",
                  px: 3,
                  py: 1,
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderColor: "#fff",
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              minHeight: { xs: 240, md: 360 },
            }}
          >
            <Box
              component="img"
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6841ca4c5468891aedebb224_homepage-hero-mobile-858x803.webp"
              alt="Hero"
              sx={{
                width: "100%",
                maxWidth: 400,
                position: "relative",
                zIndex: 1,
              }}
            />
            <Box
              component="img"
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/683dd52d4c9254eada79dd11_Discord%20Boy.webp"
              alt=""
              sx={{
                position: "absolute",
                right: { xs: -10, md: -30 },
                bottom: 0,
                width: { xs: 100, md: 150 },
                zIndex: 2,
              }}
            />
            <Box
              component="img"
              src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/683e0f99bf66ed8e1d55ff2c_Leaning%20Girl%2003.webp"
              alt=""
              sx={{
                position: "absolute",
                left: { xs: -10, md: -30 },
                bottom: 0,
                width: { xs: 100, md: 140 },
                zIndex: 2,
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Features */}
      <Box id="features" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={sectionSx}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: 32, md: 44 },
              fontWeight: 800,
              textAlign: "center",
              mb: 2,
            }}
          >
            Packed with{" "}
            <Box component="span" sx={{ color: "#7c6aef" }}>
              Features
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "#b5bac1",
              fontSize: 17,
              textAlign: "center",
              mb: 6,
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Everything you need to build, deploy, and monitor your applications — all in one place.
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
              },
              gap: 3,
            }}
          >
            {[
              {
                icon: <GitHub />,
                title: "GitHub Integration",
                desc: "Connect your repos, trigger pipelines on push, and manage pull requests directly from deployX.",
              },
              {
                icon: <CodeRounded />,
                title: "CI/CD Pipelines",
                desc: "Automate build, test, and deploy workflows with zero-config pipelines powered by your Jenkinsfile.",
              },
              {
                icon: <TerminalRounded />,
                title: "One-Click Deploy",
                desc: "Deploy your app to any cloud or container registry with a single click from your dashboard.",
              },
              {
                icon: <ChatRounded />,
                title: "Real-time Logs",
                desc: "Stream live build and deployment logs so you always know what's happening in your pipeline.",
              },
              {
                icon: <SecurityRounded />,
                title: "Secrets Management",
                desc: "Securely store and inject environment variables and secrets into your deployments.",
              },
              {
                icon: <GroupsRounded />,
                title: "Team Collaboration",
                desc: "Invite teammates, manage roles, and collaborate on deployments and infrastructure together.",
              },
            ].map((f) => (
              <Box
                key={f.title}
                sx={{
                  bgcolor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 3,
                  p: 3,
                  transition: "all 0.3s",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderColor: "#7c6aef",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    background: "linear-gradient(135deg, #601b9f, #0d9488)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    mb: 2,
                  }}
                >
                  {f.icon}
                </Box>
                <Typography
                  sx={{ color: "#fff", fontWeight: 600, fontSize: 17, mb: 1 }}
                >
                  {f.title}
                </Typography>
                <Typography
                  sx={{ color: "#a0a3a8", fontSize: 14, lineHeight: 1.6 }}
                >
                  {f.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Community */}
      <Box id="community" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={sectionSx}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: 32, md: 44 },
              fontWeight: 800,
              textAlign: "center",
              mb: 2,
            }}
          >
            Powerful{" "}
            <Box component="span" sx={{ color: "#7c6aef" }}>
              Integrations
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "#b5bac1",
              fontSize: 17,
              textAlign: "center",
              mb: 6,
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Connect deployX with the tools you already use to supercharge your DevOps workflow.
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
            }}
          >
            {[
              {
                icon: <GitHub sx={{ fontSize: 32 }} />,
                title: "GitHub & GitLab",
                desc: "Sync repositories, trigger deployments on push events, and manage branches from your dashboard.",
              },
              {
                icon: <WebhookRounded sx={{ fontSize: 32 }} />,
                title: "Webhook Triggers",
                desc: "Fire webhooks on deploy success, failure, or rollback to notify Slack, Teams, or any endpoint.",
              },
              {
                icon: <SecurityRounded sx={{ fontSize: 32 }} />,
                title: "Docker & Kubernetes",
                desc: "Build Docker images, push to registries, and deploy to Kubernetes clusters seamlessly.",
              },
              {
                icon: <IntegrationInstructionsRounded sx={{ fontSize: 32 }} />,
                title: "Jenkins Pipelines",
                desc: "Trigger and monitor Jenkins jobs directly from deployX with full log streaming support.",
              },
            ].map((c) => (
              <Box
                key={c.title}
                sx={{
                  bgcolor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 3,
                  p: 4,
                  display: "flex",
                  gap: 2.5,
                  transition: "all 0.3s",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderColor: "#7c6aef",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 2,
                    background: "linear-gradient(135deg, #7c6aef, #5865f2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </Box>
                <Box>
                  <Typography
                    sx={{ color: "#fff", fontWeight: 600, fontSize: 18, mb: 1 }}
                  >
                    {c.title}
                  </Typography>
                  <Typography
                    sx={{ color: "#a0a3a8", fontSize: 14, lineHeight: 1.7 }}
                  >
                    {c.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Developers */}
      <Box id="developers" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={sectionSx}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: 32, md: 44 },
              fontWeight: 800,
              textAlign: "center",
              mb: 2,
            }}
          >
            Built for{" "}
            <Box component="span" sx={{ color: "#7c6aef" }}>
              Developers
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "#b5bac1",
              fontSize: 17,
              textAlign: "center",
              mb: 6,
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Extend deployX with our developer-first APIs and CLI tools to automate your entire DevOps workflow.
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
              gap: 3,
            }}
          >
            {[
              {
                icon: <ApiRounded sx={{ fontSize: 40 }} />,
                title: "REST API",
                desc: "Full-featured REST API to trigger deployments, fetch logs, manage environments, and more.",
              },
              {
                icon: <WebhookRounded sx={{ fontSize: 40 }} />,
                title: "Webhooks",
                desc: "Real-time event notifications for build status, deployment success, and pipeline failures.",
              },
              {
                icon: <TerminalRounded sx={{ fontSize: 40 }} />,
                title: "CLI Tools",
                desc: "Deploy apps, manage secrets, and stream logs directly from your terminal with the deployX CLI.",
              },
            ].map((d) => (
              <Box
                key={d.title}
                sx={{
                  bgcolor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 3,
                  p: 4,
                  textAlign: "center",
                  transition: "all 0.3s",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderColor: "#7c6aef",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box sx={{ color: "#7c6aef", mb: 2 }}>{d.icon}</Box>
                <Typography
                  sx={{ color: "#fff", fontWeight: 600, fontSize: 18, mb: 1 }}
                >
                  {d.title}
                </Typography>
                <Typography
                  sx={{ color: "#a0a3a8", fontSize: 14, lineHeight: 1.7 }}
                >
                  {d.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* About */}
      <Box id="about" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ ...sectionSx, textAlign: "center" }}>
          <InfoRounded sx={{ color: "#7c6aef", fontSize: 48, mb: 2 }} />
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: 32, md: 44 },
              fontWeight: 800,
              mb: 2,
            }}
          >
            About{" "}
            <Box component="span" sx={{ color: "#7c6aef" }}>
              deployX
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "#b5bac1",
              fontSize: 17,
              lineHeight: 1.8,
              maxWidth: 700,
              mx: "auto",
              mb: 4,
            }}
          >
            deployX was built for developers who want to ship faster without the DevOps headache. We combine GitHub integration, automated CI/CD pipelines, app hosting, and real-time monitoring into one seamless platform. Whether you&apos;re a solo developer or running a large engineering team, deployX gives you the power to build, deploy, and scale with confidence.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 4, md: 8 },
              flexWrap: "wrap",
              mb: 4,
            }}
          >
            {[
              { num: "10K+", label: "Developers" },
              { num: "50K+", label: "Deployments/day" },
              { num: "5K+", label: "Apps Hosted" },
              { num: "99.9%", label: "Uptime" },
            ].map((s) => (
              <Box key={s.label}>
                <Typography
                  sx={{ color: "#7c6aef", fontSize: 36, fontWeight: 800 }}
                >
                  {s.num}
                </Typography>
                <Typography sx={{ color: "#a0a3a8", fontSize: 14 }}>
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Giant deployX Text */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          pt: 4,
          pb: 4,
          overflow: "visible",
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: { xs: 80, sm: 140, md: 200, lg: 260 },
            fontWeight: 900,
            lineHeight: 1.2,
            letterSpacing: { xs: -4, md: -10 },
            userSelect: "none",
          }}
        >
          <Box
            component="span"
            sx={{
              background: "linear-gradient(135deg, #7c6aef, #5865f2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mr: { xs: 1, md: 2 },
            }}
          >
            deploy
          </Box>
          <Box component="span" sx={{ color: "#fff", WebkitTextStroke: "2px #7c6aef", textShadow: "0 0 40px rgba(124,106,239,0.8)" }}>X</Box>
        </Typography>
      </Box>
      {/* Login Modal */}
      <Dialog
        open={open}
        onClose={() => { setOpen(false); setError(""); }}
        slotProps={{ backdrop: { sx: { bgcolor: "rgba(0,0,0,0.5)", backdropFilter: "blur(20px)" } }, paper: {
            sx: {
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(40px) saturate(1.6)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "28px",
            maxWidth: 560,
            width: "100%",
            p: 0,
            overflow: "hidden",
            boxShadow: "0 0 80px rgba(124,106,239,0.15), 0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
            animation: `${modalEnter} 0.4s cubic-bezier(0.16,1,0.3,1)`,
          }} }}
      >
        <DialogContent sx={{ p: { xs: 2.5, sm: 3 }, position: "relative", overflow: "hidden" }}>
          {/* Floating orbs */}
          <Box sx={{ position: "absolute", top: -60, right: -60, width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,106,239,0.3), transparent 70%)", animation: `${orbFloat1} 6s ease-in-out infinite`, pointerEvents: "none" }} />
          <Box sx={{ position: "absolute", bottom: -40, left: -40, width: 140, height: 140, borderRadius: "50%", background: "radial-gradient(circle, rgba(88,101,242,0.25), transparent 70%)", animation: `${orbFloat2} 5s ease-in-out infinite`, pointerEvents: "none" }} />

          {/* Shimmer accent */}
          <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, rgba(124,106,239,0.6), rgba(88,101,242,0.8), rgba(124,106,239,0.6), transparent)", backgroundSize: "200% 100%", animation: `${shimmer} 3s linear infinite` }} />

          {/* Logo */}
          <Box sx={{ textAlign: "center", mb: 2, animation: `${fadeUp} 0.5s ease both` }}>
            <Box sx={{ width: 56, height: 56, borderRadius: "16px", background: "linear-gradient(135deg, #7c6aef, #5865f2)", display: "inline-flex", alignItems: "center", justifyContent: "center", mb: 1.5, boxShadow: "0 8px 32px rgba(88,101,242,0.4)", animation: `${logoPulse} 3s ease-in-out infinite` }}>
              <RocketLaunchRounded sx={{ color: "#fff", fontSize: 28 }} />
            </Box>
            <Typography sx={{ color: "#fff", fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>Welcome back</Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: 13, mt: 0.3 }}>Sign in to manage your deployments</Typography>
          </Box>

          {error && (
            <Alert severity="error" icon={false} sx={{ mb: 1.5, bgcolor: "rgba(250,119,124,0.1)", border: "1px solid rgba(250,119,124,0.2)", borderRadius: "12px", color: "#fa777c", fontSize: 13, backdropFilter: "blur(10px)", animation: `${shake} 0.3s ease` }}>
              {error}
            </Alert>
          )}

          {/* Inputs */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 1.5, animation: `${fadeUp} 0.5s 0.1s ease both` }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailRounded sx={{ color: "rgba(255,255,255,0.3)", fontSize: 20 }} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={glassInputSx}
            />
            <TextField
              fullWidth
              size="small"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !loading && handleLogin()}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockRounded sx={{ color: "rgba(255,255,255,0.3)", fontSize: 20 }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        onClick={() => setShowPassword(!showPassword)}
                        sx={{ color: "rgba(255,255,255,0.3)", "&:hover": { color: "rgba(255,255,255,0.6)" } }}
                      >
                        {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              sx={glassInputSx}
            />
          </Box>

          {/* Remember / Forgot */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5, animation: `${fadeUp} 0.5s 0.15s ease both` }}>
            <FormControlLabel control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} size="small" sx={{ color: "rgba(255,255,255,0.2)", "&.Mui-checked": { color: "#7c6aef" } }} />} label="Remember me" sx={{ "& .MuiFormControlLabel-label": { color: "rgba(255,255,255,0.45)", fontSize: 13 } }} />
            <MuiLink href="#" underline="none" sx={{ color: "#7c6aef", fontSize: 13, fontWeight: 500, "&:hover": { color: "#9b8fff" } }}>Forgot password?</MuiLink>
          </Box>

          {/* Sign In */}
          <Button fullWidth variant="contained" onClick={handleLogin} disabled={loading} sx={{ background: "linear-gradient(135deg, #7c6aef, #5865f2)", fontWeight: 600, fontSize: 15, textTransform: "none", borderRadius: "12px", py: 1.2, mb: 1.5, boxShadow: "0 4px 24px rgba(88,101,242,0.35)", transition: "all 0.25s", animation: `${fadeUp} 0.5s 0.2s ease both`, "&:hover": { background: "linear-gradient(135deg, #6b59de, #4752c4)", boxShadow: "0 8px 32px rgba(88,101,242,0.5)", transform: "translateY(-2px)" }, "&:active": { transform: "translateY(0)" }, "&.Mui-disabled": { background: "linear-gradient(135deg, #7c6aef, #5865f2)", opacity: 0.7, color: "#fff" } }}>
            {loading ? <CircularProgress size={22} sx={{ color: "#fff" }} /> : "Sign In"}
          </Button>

          <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textAlign: "center", mb: 1.5, animation: `${fadeUp} 0.5s 0.25s ease both` }}>
            Don&apos;t have an account?{" "}<MuiLink href="#" underline="none" sx={{ color: "#7c6aef", fontWeight: 600, "&:hover": { color: "#9b8fff" } }}>Sign up</MuiLink>
          </Typography>

          <Divider sx={{ my: 1.5, "&::before, &::after": { borderColor: "rgba(255,255,255,0.08)" }, color: "rgba(255,255,255,0.3)", fontSize: 12, animation: `${fadeUp} 0.5s 0.3s ease both` }}>or continue with</Divider>

          {/* Social */}
          <Box sx={{ display: "flex", gap: 1.5, animation: `${fadeUp} 0.5s 0.35s ease both` }}>
            {[{ icon: <Google />, label: "Google" }, { icon: <GitHub />, label: "GitHub" }].map((s) => (
              <Button key={s.label} fullWidth startIcon={s.icon} onClick={() => router.push("/dashboard")} sx={{ bgcolor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", color: "rgba(255,255,255,0.75)", fontWeight: 500, fontSize: 13, textTransform: "none", borderRadius: "12px", py: 1.1, transition: "all 0.25s", "&:hover": { bgcolor: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.2)", transform: "translateY(-1px)" } }}>{s.label}</Button>
            ))}
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

