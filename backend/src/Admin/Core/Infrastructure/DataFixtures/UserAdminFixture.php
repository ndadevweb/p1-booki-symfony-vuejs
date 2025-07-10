<?php

namespace App\Admin\Core\Infrastructure\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Admin\Core\Infrastructure\Entity\UserAdmin;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserAdminFixture extends Fixture
{
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }

    public function load(ObjectManager $manager): void
    {
        $admin = new UserAdmin();
        $admin->setEmail('booki@booki.local');
        $hashedPassword = $this->hasher->hashPassword($admin, 'booki');
        $admin->setPassword($hashedPassword);
        $admin->setRoles(['ROLE_ADMIN']);
        $admin->setFirstname('Admin');
        $admin->setLastname('Principal');
        $manager->persist($admin);
        $manager->flush();
    }
}
