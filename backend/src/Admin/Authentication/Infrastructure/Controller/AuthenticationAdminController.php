<?php

namespace App\Admin\Authentication\Infrastructure\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

final class AuthenticationAdminController extends AbstractController
{
    #[Route('/management/signin', name: 'app_authentication_admin')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        $error = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('@EasyAdmin/page/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
            'page_title' => 'Connexion',
            'target_path' => $this->generateUrl('app_management_dashboard'),
            'remember_me_enabled' => true,
            'username_label' => "Mon identifiant",
            'password_label' => "Mon mot de passe",
            'sign_in_label' => "Je me connecte",
            'remember_me_label' => "Se souvenir de moi"
        ]);

        // return $this->render('web/management/authentication/index.html.twig', [
            // 'last_username' => $lastUsername,
            // 'error' => $error,
        // ]);
    }

    #[Route('/management/signout', name: 'app_authentication_admin_signout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
